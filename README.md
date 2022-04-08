# About Milky Way 

Milky Way is a decentralized fullstack web application developed with Next.js, Solidity, Hardhat, Openzepplin, using IPFS for file storage.
It is a NFT Marketplace for users to mint, list, sell, and buy NFTs.

1. Blockchain - Meter (optional RPC provider)
2. Ethereum Development Environment - Hardhat
3. Front end framework - Next.js & React
4. Ethereum web client library - Ethers.js (????? Web3? Meterify??)
5. File storage - IPFS


# Milky Way To Start

run ```npm install```  after git clone

run ```npm run dev```

# Solidity Contract - NFT.sol

This contract uses OpenZepplin ERC721 standard, developed with Hardhat.
The contract contains standard functions, namely minting tokens, updating listing price, creating sale, reselling tokens, transferring ownership of token, returning unsold market items, returning purchased items for users, returning only listed items for users. 

# Hardhat Solidity Development Environment 

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.


# Configurations
Hardhat chain ID: 1337
If you see a error on incompatible compiler versions between solidity version and the semver requirement, add the following to solhint.json (this project uses solidity 0.8.4)

```JSON
"compiler-version": ["error", "^0.8.4"] 

```

## Hardhat Configuration:

Note that to deploy to Polygon test or main networks, you should update configurations in the hardhat.config.js to use a private key. 


```JavaScript
require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const fs = require("fs");
//reference to private key
const privateKey = fs.readFileSync("test/.secret").toString();
const projectId = "43996abd00574da789e54f0dc7e9aec1";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      //Infura
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      //Infura
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

# Versions
node version 16.14.0
npm version 8.3.1
solidity version 0.8.4

# Testing
A sample test file, sample-test.js in the "test" directory, is written to test the contract. To run the sample test, run
```shell
npx hardhat test
```


# Authors and Acknowledgment
Original smart contract [tutorial](https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb) by Nadir Dabit

https://github.com/dabit3/polygon-ethereum-nextjs-marketplace
