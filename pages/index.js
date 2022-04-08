/* pages/index.js */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
// import Web3Modal from "web3modal";
import Router, { useRouter } from "next/router";
import Carousel2 from "./Carousel2";

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const router = useRouter();
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpctest.meter.io"
    );
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      provider
    );
    const data = await contract.fetchMarketItems();

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
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
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }
  function openNFT(_nft) {
    Router.push({
      pathname: "/nft-desc",
      query: {
        price: _nft.price,
        tokenId: _nft.tokenId,
        seller: _nft.seller,
        owner: _nft.owner,
        image: _nft.image,
        name: _nft.name,
        description: _nft.description,
      },
    });
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    // const web3Modal = new Web3Modal();
    // const connection = await web3Modal.connect();
    // const provider = new ethers.providers.Web3Provider(connection);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(
    //   marketplaceAddress,
    //   NFTMarketplace.abi,
    //   signer
    // );

    /* user will be prompted to pay the asking proces to complete the transaction */
    // const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    // const transaction = await contract.createMarketSale(nft.tokenId, {
    //   value: price,
    // });
    // await transaction.wait();
    // loadNFTs();
  }

  function renderNFT() {
    return (
      <div className="flex justify-center">
        <div className="px-4 py-10" style={{ maxWidth: "1600px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {nfts.map((nft, i) => (
              <div
                key={nft.tokenId}
                className="border shadow-md shadow-cyan-500/50 rounded-xl m-4 overflow-hidden"
              >
                <a
                  className="relative block border border-gray-100"
                  href="#"
                  onClick={() => openNFT(nft)}
                >
                  <img
                    className="object-contain w-full h-56 lg:h-72"
                    src={nft.image}
                    alt="Build Your Own Drone"
                    loading="lazy"
                  />

                  <div className="p-6">
                    <h5 className="mt-4 text-lg text-white font-bold antialiased ">
                      {nft.name}
                    </h5>

                    <p className="mt-2 text-sm text-white antialiased ">
                      {nft.price} MTR
                    </p>
                    <div className="grid justify-items-center">
                      <button
                        className="block w-1/2 p-2 mt-4 text-md font-medium bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-lg antialiased text-white hover:from-pink-400 hover:to-fuchsia-500 "
                        type="button"
                        onClick={() => openNFT(nft)}
                      >
                        VIEW MORE
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (loadingState === "loaded" && !nfts && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>;
  return (
    <div className="NFTdisplay ">
      <Carousel2 />
      {renderNFT()}
    </div>
  );
}
