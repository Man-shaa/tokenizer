const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const token = await ethers.getContractAt("ManSha42", contractAddress);

    // This is the address from your .env / MetaMask
    const myAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; 
    
    const balance = await token.balanceOf(myAddress);
    const owner = await token.owner();
    const symbol = await token.symbol();

    console.log("--- DEBUG INFO ---");
    console.log("Contract Owner:", owner);
    console.log("My Address:    ", myAddress);
    console.log("Token Balance: ", ethers.formatUnits(balance, 18), symbol);
    
    if (owner.toLowerCase() === myAddress.toLowerCase()) {
        console.log("SUCCESS: You are the owner and should see the tokens!");
    } else {
        console.log("FAILURE: You are NOT the owner. The tokens went to:", owner);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});