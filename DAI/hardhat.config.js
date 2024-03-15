require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-verify");
require('./.env')
require('dotenv').config()

module.exports = {
  solidity: "0.5.12",
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
