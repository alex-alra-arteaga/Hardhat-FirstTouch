//imports
const { ethers, run, network } = require("hardhat");


//async main
async function main() {
  //deploy our contract
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deployed() 
  console.log(`Deployed contract: ${simpleStorage.address}`)
  //what happens when we deploy to our 


  //what happens if we're in a testnet (verifies our contract)
  if (network.config.chainId === 4 && process.env.ETHERSCAN_PRIVATE_KEY) {//w also want to check for it's existence) 
      await simpleStorage.deployTransaction.wait(6);
      await verify(simpleStorage.address, []) //we trigger it passing the required inputs
     //because the verify function it's async and deals with promises we add the await
  }
  //reads currentvalue
     const currentValue = await simpleStorage.retrieve()
     console.log(`Current Value is: ${currentValue}`)

  //Update the current value
     const transactionResponse = await simpleStorage.store(7)
     await transactionResponse.wait(1)
     const updatedValue = await simpleStorage.retrieve()
     console.log(`Updated value is: ${updatedValue}`)
  
} 
//the verify function
async function verify(contractAddress, args) {
  console.log("Verifying contract...")
  try {
  await run("verify:verify", {
    address: contractAddress,
    constructorArguments: args, 
  })
} catch (e) {
  if (e.message.toLowerCase().includes("already verified")) {
    console.log("Already verified!")
  } else {
    console.log(e)
  }
}
}

//main function called
main()
    .then(() => process.exit(0))
    .catch((error) => { 
        console.error(error)
        process.exit(1)
    });