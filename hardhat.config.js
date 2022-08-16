require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter")

const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL, //rinkeby RPC_URL
      accounts: [process.env.PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      //accounts autogiven by hardhat
      chainId: 31337, //hardhat network chainId
    }
  },
  solidity: "0.8.9",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true, //activate it at yarn hardhat test
    outputFile: "gas-report.txt", //add it to gitignore
    noColors: true, //no syntax colors 
    currency: "USD", //get the costs in USD in a blockchain like eth
    coinmarketcap: COINMARKETCAP//API key of coinmarketcap
  }
};
