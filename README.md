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

The project is a platform for users to mint, list/relist, sell, and buy NFTs. Users must login with their metamask in order to buy, sell, list, or relist the NFTs. The website recognizes each user's metamask account as a unique valid login account, so users would not have to register to the platform to log in. Users may connect to their metamask in the Dashboard if they have not already done so. The button on the rightmost side of the dashboard will show whether or not a user is connected, or logged in. Without connecting to the metamask, users may only browse the marketplace, but would not be able to mint, buy, or sell NFTs. The "Collection" button in the dashboard shows users their bought collections, which they can re-list to the marketplace. The "Listed" button will render what users have listed in the marketplace. 

<img width="1048" alt="Screen Shot 2022-04-11 at 10 28 06 AM" src="https://user-images.githubusercontent.com/101501539/162796255-07432214-2cba-4165-a782-0bd592dfe350.png">

Upon connecting to the metamask, the rightmost button will show status as "metamask connected", and users may then create (mint), buy, or list NFTs.
<img width="1408" alt="Screen Shot 2022-04-11 at 10 29 05 AM" src="https://user-images.githubusercontent.com/101501539/162796399-e29f3bb4-09c8-4ee5-9101-c34d03a9376d.png">

The Carousel on the main page is just a demonstration of the latest drops of NFTs, upon clicking "view drop" the page redirects to a page that demonstrates an about page of a particular artwork.

<img width="1396" alt="Screen Shot 2022-04-11 at 10 33 06 AM" src="https://user-images.githubusercontent.com/101501539/162796999-afa05cc3-e531-4d36-a9e3-c47ebbee81eb.png">

# Meter Sidechain

Milky Way runs on the [Meter sidechain](https://meter.io/?p=3429), which helps speed up the process of minting, buying, and selling NFTs as more transactions can be done per node per second, all with lower gas fee. 

# Project Demo

Milky Way project demo [here](https://milky-way-nft.herokuapp.com)

# Authors and Acknowledgment
Original smart contract [tutorial](https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb) by Nadir Dabit
