/* pages/dashboard.js */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import React from "react";
import Dashboard from "./dashboard";

import { marketplaceAddress } from "../config";


import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function CreatorDashboard() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {

    loadNFTs();

  }, []);
  async function loadNFTs() {
    
    const providerOptions = {
      // metamask: {
      //   package: true
      // }
    };

    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions

    });
    
    try {
      
      const connection = await web3Modal.connect();
      
      console.log(connection);
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        marketplaceAddress,
        NFTMarketplace.abi,
        signer
      );
      const data = await contract.fetchItemsListed();

      const items = await Promise.all(
        data.map(async (i) => {
          const tokenUri = await contract.tokenURI(i.tokenId);
          const meta = await axios.get(tokenUri);
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
          };
          return item;
        })
      );
      
      setNfts(items);
      setLoadingState("loaded");
    } catch (err) {
      console.log('Wallet connection failed. Reason:', err.message);
    }
    // const connection = await web3Modal.connect();
    // const provider = new ethers.providers.Web3Provider(connection);
    // const signer = provider.getSigner();

    // const contract = new ethers.Contract(
    //   marketplaceAddress,
    //   NFTMarketplace.abi,
    //   signer
    // );
    // const data = await contract.fetchItemsListed();

    // const items = await Promise.all(
    //   data.map(async (i) => {
    //     const tokenUri = await contract.tokenURI(i.tokenId);
    //     const meta = await axios.get(tokenUri);
    //     let price = ethers.utils.formatUnits(i.price.toString(), "ether");
    //     let item = {
    //       price,
    //       tokenId: i.tokenId.toNumber(),
    //       seller: i.seller,
    //       owner: i.owner,
    //       image: meta.data.image,
    //     };
    //     return item;
    //   })
    // );

    // setNfts(items);
    // setLoadingState("loaded");
  }

  return (
    <div className="p-10">
      <Dashboard nfts={nfts} loadingState={loadingState}></Dashboard>
    </div>
  );
}

