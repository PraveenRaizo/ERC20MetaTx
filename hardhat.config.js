require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    local: {
      url: 'http://localhost:8545'
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/sYdkTqbTjXs5E_Mi0i-_EeIuknVZNxK1',
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai:{
      url: 'https://polygon-mumbai.g.alchemy.com/v2/3NW-aThdywawj6qGMlGOutPnV6NSk-e5',
      accounts: [process.env.PRIVATE_KEY],
    },
    

  },
  etherscan : {
    apiKey : {
      polygonMumbai: process.env.ES_API_POLYSCAN,
      goerli: process.env.ES_API
    },
  }
};
