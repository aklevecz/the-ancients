require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const infuraKey=process.env.INFURA_KEY
const pp = process.env.PP
module.exports = {
    defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url:`https://rinkeby.infura.io/v3/${infuraKey}`,
      accounts: [pp]
    }
  },
  paths:{
    artifacts:"./app/contracts"
  },
  solidity: "0.8.0",
};

