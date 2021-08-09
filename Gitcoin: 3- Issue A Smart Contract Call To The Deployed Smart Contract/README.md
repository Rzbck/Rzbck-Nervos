# Hackathon: Nervos - Broaden the Spectrum Gitcoin: 

## 3) Issue A Smart Contract Call To The Deployed Smart Contract

### Task Submission 
To complete the tasks, add the following materials to a document on your Github and submit for review by the judges (include the link in your Gitcoin submission):






#### 1. A screenshot of the console output immediately after you have successfully issued a smart contract call.
![A screenshot of the accounts you created (account list) in ckb-cli](https://github.com/Rzbck/Rzbck-Nervos/blob/main/Gitcoin:%203-%20Issue%20A%20Smart%20Contract%20Call%20To%20The%20Deployed%20Smart%20Contract/img/A%20screenshot%20of%20the%20console%20output%20immediately%20after%20you%20have%20successfully%20issued%20a%20smart%20contract%20call..PNG)

#### 2. The transaction hash from the console output (in text format).
##### `0xb8c525638a8cbbb5b0fd3fb74ae76e84170f9c85d81d08afba6c38987026ef74` 

#### 3. The contract address that you called (in text format).
##### `0xD6221222bA747BC6F2AA56541B4189078F661199`

#### 4. The ABI for contract you made a call on (in text format).
##### 
```
[
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
]
