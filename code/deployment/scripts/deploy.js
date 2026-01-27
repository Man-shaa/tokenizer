const { ethers } = require("hardhat");

async function main() {
	const Token = await ethers.getContractFactory("ManSha42");
	const token = await Token.deploy();
	//   await token.deployed();

	console.log("ManSha42 deployed to:", token.address);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
