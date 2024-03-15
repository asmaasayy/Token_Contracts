
const hre = require("hardhat");
const {ethers}=require('hardhat')

async function main() {
  
  const DaiToken = await hre.ethers.getContractFactory("Dai");

  const daitoken=await DaiToken.deploy("0x3130303000000000000000000000000000000000000000000000000000000000");

  console.log(
    "Contract deployed at", daitoken.target
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


