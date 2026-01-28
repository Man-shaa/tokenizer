const { ethers } = require("hardhat");

async function main() {
    console.log("Starting deployment...");

    // Get the contract factory
    const Token = await ethers.getContractFactory("ManSha42");

    // Deploy the contract
    const token = await Token.deploy();

    // Wait for the deployment to finish
    await token.waitForDeployment();

    const address = await token.getAddress();
    console.log("ManSha42 deployed successfully!");
    console.log("Contract Address:", address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});