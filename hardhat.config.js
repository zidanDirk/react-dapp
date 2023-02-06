require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "0jnGZhlajNEaZLUZwIzZ-tYmecgrZvbL";

const GOERLI_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [ GOERLI_PRIVATE_KEY ]
    }
  }
};
