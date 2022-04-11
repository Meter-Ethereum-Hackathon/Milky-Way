# About Milky Way 

Milky Way is a decentralized fullstack web application developed with Next.js, Solidity, Hardhat, Openzepplin, using IPFS for file storage.
It is a NFT Marketplace for users to mint, list, sell, and buy NFTs. 

1. Blockchain - Meter (optional RPC provider)
2. Ethereum Development Environment - Hardhat
3. Front end framework - Next.js & React
4. Ethereum web client library - Ethers.js
5. File storage - IPFS

# Milky Way To Start

run ```npm install```  after git clone

run ```npm run dev```

# Solidity Contract - NFT.sol

This contract uses OpenZepplin ERC721 standard, developed with Hardhat(development environment).
The contract contains standard functions, namely minting tokens, updating listing price, creating sale, reselling tokens, transferring ownership of token, returning unsold market items, returning purchased items for users, returning only listed items for users. 


# Features

The project is a platform for users to mint, list/relist, sell, and buy NFTs. Users must login with their metamask in order to buy, sell, list, or relist the NFTs. The website recognizes each user's metamask account as a unique valid login account, so users would not have to register to the platform to log in. Users may connect to their metamask in the Dashboard if they have not already done so. The "Collection" button in the dashboard shows users their bought collections, which they can re-list to the marketplace. The "Listed" button will render what users have listed in the marketplace. 

<img width="967" alt="Screen Shot 2022-04-10 at 9 53 56 AM" src="https://user-images.githubusercontent.com/101501539/162630815-7ab268d8-47dc-4f55-b9df-42a93b6e9277.png">

# Meter Sidechain

Milky Way runs on the [Meter sidechain](https://meter.io/?p=3429)

# Project Demo

Milky Way project demo [here](https://milky-way-nft.herokuapp.com/dashboardMain#)

# Authors and Acknowledgment
Original smart contract [tutorial](https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb) by Nadir Dabit
