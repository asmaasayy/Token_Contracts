
const hre = require("hardhat");

async function main() {

  const UniToken = await hre.ethers.getContractFactory("Uni");

  const unitoken=await UniToken.deploy("0x0602C514691A537d1bff0f0A8De1AD5Ee8cD2402","0x0602C514691A537d1bff0f0A8De1AD5Ee8cD2402",1709794500);

  console.log(
    "Contract deployed at",unitoken.target
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

