require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-verify");
require('@openzeppelin/hardhat-upgrades');
require('./.env')
require('dotenv').config()

module.exports = {
  solidity:{
    compilers:[
      {
        version: "0.6.10",
      },
      {
        version:"0.8.0"
      },
      {
        version:"0.8.8"
      },
      {
        version: "0.8.20",
      },
    ]
  },
  networks: {
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      
    },
    
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  sourcify: {
   enabled: true
  }
};



