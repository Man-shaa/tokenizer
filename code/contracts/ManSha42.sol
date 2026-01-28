// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ManSha42 is ERC20, Ownable {
    constructor() ERC20("ManSha42", "MS42") Ownable(msg.sender) {
        // Initial supply: 1,000,001 tokens
        _mint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 1000001 * 10 ** decimals());
    }

    function ownerMint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}