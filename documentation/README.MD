Token Standard : ERC20
Token Name : ManSha42
Token Symbol : MS42
TotalSupply : 10_001

1_001 tokens minted at deployment, no more can ever be created

We inherit ERC20 from OpenZeppelin which already implements
totalSupply, balanceOf, transfer, approve, transferFrom, etc.
Here we only define the constructor and mint the initial supply
to the deployer. This ensures a fixed supply token.