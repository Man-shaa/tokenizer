require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
solidity: "0.8.20",
networks: {
	bscTestnet: {
		url: process.env.BSC_TESTNET_RPC || "",
		accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
		}
	},
	hardhat: {
		chainId: 1337
	},
	localhost: {
		url: "http://127.0.0.1:8545",
		chainId: 1337,
		accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
	},
	etherscan: {
		apiKey: {
			bscTestnet: process.env.BSCSCAN_API_KEY
		}
	}
};