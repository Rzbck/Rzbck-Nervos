import Web3 from 'web3';
import * as RzbckStorageJSON from '../../../build/contracts/RzbckStorage.json';
import { RzbckStorage } from '../../types/RzbckStorage';

const DEFAULT_SEND_OPTIONS = {
    gas: 5000000
};

export class RzbckStorageWrapper {
    web3: Web3;

    contract: RzbckStorage;

    address: string;

    constructor(web3: Web3) {
        this.web3 = web3;
        this.contract = new web3.eth.Contract(RzbckStorageJSON.abi as any) as any;
    }

    get isDeployed() {
        return Boolean(this.address);
    }

    async getStoredValue(fromAddress: string) {
        const data = await this.contract.methods.get().call({ from: fromAddress });

        return parseInt(data, 10);
    }

    async setStoredValue(value: number, fromAddress: string) {
        const tx = await this.contract.methods.set(value).send({
            ...DEFAULT_SEND_OPTIONS,
            from: fromAddress,
            value
        });

        return tx;
    }

    async deploy(fromAddress: string) {
        const deployTx = await (this.contract
            .deploy({
                data: RzbckStorageJSON.bytecode,
                arguments: []
            })
            .send({
                ...DEFAULT_SEND_OPTIONS,
                from: fromAddress,
                to: '0x0000000000000000000000000000000000000000'
            } as any) as any);

        this.useDeployed(deployTx.contractAddress);

        return deployTx.transactionHash;
    }

    useDeployed(contractAddress: string) {
        this.address = contractAddress;
        this.contract.options.address = contractAddress;
    }
}
