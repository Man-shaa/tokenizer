Token Standard : ERC20
Token Name : ManSha42
Token Symbol : MS42
TotalSupply : 10_001

1_001 tokens minted at deployment, no more can ever be created

We inherit ERC20 from OpenZeppelin which already implements
totalSupply, balanceOf, transfer, approve, transferFrom, etc.
Here we only define the constructor and mint the initial supply
to the deployer. This ensures a fixed supply token.

Ownable : Adds admin functions to the ownership

public wallet address : 0x38CaE3A79cf49cd981f8966Fa7bD72201781c333 (42msharifi@gmail.com)

npx hardhat node 
accout #0 : 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

openzeppelin ERC20 (very minimal) doc : https://docs.openzeppelin.com/contracts/5.x/erc20



J'utilise npx console pour simuler un environnement de deploiement / test avec Hardhat local blockchain (imposs a faire avec BNB ils demandent un wallet avec du vrai argent dessus)

npx hardhat console

const Token = await ethers.getContractFactory("ManSha42");
const token = await Token.deploy();

+ commands pour test : [a suivre]



1	npx hardhat node															# Starts your local private "world."
2	npx hardhat run scripts/deploy.js --network localhost						# Places your contract into that world.
3	Copy the Address															# This is the "ID" of your specific deployment.
4	npx hardhat console --network localhost										# Allows you to talk directly to the blockchain.
5	const token = await ethers.getContractAt("ManSha42", "[contract_addr]")		# Gets our created token
5	await token.balanceOf("[ACCOUNT#0_ADRESS]")									# Proves the tokens exist with a supply of 1_000_001
(6) ethers.formatUnits(balance, 18)												# Formats into the number of token (without decimals) - need previous command return into 'balance' variable

