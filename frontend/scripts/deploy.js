const hre = require("hardhat");

async function main() {

  const NftContract = await hre.ethers.getContractFactory("NftContract");
  const nftContract = await NftContract.deploy();

  await nftContract.deployed();

  console.log(
    `deployed to ${nftContract.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
