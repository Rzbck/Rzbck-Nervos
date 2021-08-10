# Hackathon: Nervos - Broaden the Spectrum Gitcoin: 

## Gitcoin: 7- Port An Existing Ethereum DApp To Polyjuice

### Task Submission 
To complete the tasks, add the following materials to a document on your Github and submit for review by the judges (include the link in your Gitcoin submission):

#### 1-Screenshots or video of your application running on Godwoken.
Transaction In Progress
![image](https://github.com/Rzbck/Rzbck-Nervos/blob/main/Gitcoin:%207-%20Port%20An%20Existing%20Ethereum%20DApp%20To%20Polyjuice/img/1.PNG?raw=true)
Deployed Smart Contract
![image](https://github.com/Rzbck/Rzbck-Nervos/blob/main/Gitcoin:%207-%20Port%20An%20Existing%20Ethereum%20DApp%20To%20Polyjuice/img/2.PNG?raw=true)
Stored Value
![image](https://github.com/Rzbck/Rzbck-Nervos/blob/main/Gitcoin:%207-%20Port%20An%20Existing%20Ethereum%20DApp%20To%20Polyjuice/img/Stored%20Value.PNG?raw=true)
Read Stored Value
![image](https://github.com/Rzbck/Rzbck-Nervos/blob/main/Gitcoin:%207-%20Port%20An%20Existing%20Ethereum%20DApp%20To%20Polyjuice/img/Read%20Stored%20Value.PNG?raw=true)
#### 2-Link to the GitHub repository with your application which has been ported to Godwoken. This must be a different application than the one covered in this guide.
[https://github.com/Rzbck/Rzbck-Nervos/tree/main/Gitcoin:%207-%20Port%20An%20Existing%20Ethereum%20DApp%20To%20Polyjuice/app](https://github.com/Rzbck/Rzbck-Nervos/tree/main/Gitcoin:%207-%20Port%20An%20Existing%20Ethereum%20DApp%20To%20Polyjuice/app)
#### 3-If you deployed any smart contracts as part of this tutorial, please provide :
1. the transaction hash of the deployment transaction:

  `0x978c5502360ae63225c5c03d34e38cfdc0f528b8673f912733ba688a73ae8446`
  
2. the deployed contract address:

  `0xffAd6403CB138834a3B9A5D3c01Fadfe1089e590`
  
3. the ABI of the deployed smart contract:
```
"abi": [
        {
            "inputs": [],
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                }
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
