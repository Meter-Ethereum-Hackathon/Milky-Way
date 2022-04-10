/* pages/my-nfts.js */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { useRouter } from "next/router";
import React from "react";

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function MyAssets() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const router = useRouter();
  useEffect(() => {
    try {
      loadNFTs();
    } catch (err) {
      console.log('Wallet connection failed. Reason:', err.message);
    }
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await marketplaceContract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenURI = await marketplaceContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenURI);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          tokenURI,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }
  function listNFT(nft) {
    console.log("nft:", nft);
    router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`);
  }
  if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="py-10 px-20 text-2xl text-white antialiased text-center">
        No NFTs owned
      </h1>
    );
  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div
              key={i}
              className="border shadow-md shadow-cyan-500/50 rounded-xl m-4 overflow-hidden"
            >
              <img
                className="object-contain w-full h-56 lg:h-72"
                src={nft.image}
                alt="Build Your Own Drone"
                loading="lazy"
              />

              <div className="p-6">
                <h5 className="mt-4 text-lg text-white font-bold">
                  {nft.name}
                </h5>

                <p className="mt-2 text-sm text-white">{nft.price} MTR</p>
                <div className="grid justify-items-center">
                  <button
                    className="block w-1/2 p-2 mt-4 text-md font-medium bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-lg antialiased text-white hover:from-pink-400 hover:to-fuchsia-500"
                    type="button"
                    onClick={() => listNFT(nft)}
                  >
                    LIST
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
