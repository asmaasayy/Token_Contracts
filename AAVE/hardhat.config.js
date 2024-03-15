require("@nomicfoundation/hardhat-toolbox")
require("@openzeppelin/hardhat-upgrades");
require('./.env')
require('dotenv').config()

module.exports = {
  solidity:{
    compilers:[
      {
        version:"0.8.0"
      },
      {
        version:"0.8.10"
      },
      {
        version:"0.8.20"
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
