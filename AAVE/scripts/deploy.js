
const { ethers,upgrades} = require("hardhat");
const {upgradess}= require('@openzeppelin/hardhat-upgrades');

async function main() {

  const AaveToken = await ethers.getContractFactory("AaveTokenV3");
  const aavetoken = await upgrades.deployProxy(AaveToken,[],{initializer:"initialize"});
   await aavetoken.waitForDeployment();
  console.log("Contract deployed to:", aavetoken.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
