const { task } = require("hardhat/config")

task("block-number"/*name*/, "Prints the current block number"/*description*/).setAction(
    //const blockTask = async function() => {}
    //async function blockTask() {}
    async (taskArgs, hre /*Hardhat Runtime Environment */) => { //same functionality, but anonymous function
                    //can access lots of the packages that Hardhat can
                    const blockNumber = await hre.ethers.provider.getBlockNumber()
                    console.log(`Block number: ${blockNumber}`)
    }
)

module.exports={}  