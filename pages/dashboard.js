/* pages/dashboard.js */
import PropTypes from "prop-types";
import React, { useState } from "react";
import MyAssets from "./my-nft";
import Router from "next/router";

import OnboardingButton from "./detectMetamask";

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
})}
function Dashboard({ nfts, loadingState }) {
  console.log("Dashboard line 23 nfts",nfts);
  // const [NFTlist, setNFTlist] = useState(null);
  // const [NFTCollect, setNFTCollect] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  
  /**
   * Returns list of NFTs on dashboard
   */
  function renderDashBoardNFT() {
    
    return (
      <div className="dashBoard">
        <div className="p-4">
          <h2 className="text-2xl py-10 text-white antialiased text-center ">
            My Listed Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {nfts.map((nft, i) => (
              <div
                key={nft.tokenId}
                className="border shadow rounded-xl overflow-hidden"
              >
                <img src={nft.image} className="object-cover w-full h-56 lg:h-72 rounded" />
                <div className="p-6 bg-black">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /**
   * function that renders NFT collection
   * @returns collection listed
   */
  function renderCollection() {
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

                  <p className="mt-2 text-sm text-white">{nft.price} ETH</p>

                  <button
                    className="block w-full p-4 mt-4 text-sm font-medium bg-pink-500 rounded-md"
                    type="button"
                    onClick={() => listNFT(nft)}
                  >
                    LIST
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderDashBoardTabs() {
    console.log("renderDashBoardTabs");
    
    return (
      <div className="flex justify-center pt-20 ">
        <div className="grid justify-items-center">
          <ul className="flex justify-between gap-20">
            <div>
              <li className="mr-3">
                <a
                  className="inline-block shadow-lg shadow-violet-500/50  h-12 w-60 p-4 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 hover:animate-bounce text-white text-center text-lg antialiased"
                  href="#"
                  onClick={() => {
                    setSelectedOption("collected");
                  }}
                >
                  Collected
                </a>
              </li>
            </div>
            <div>
              <li className="mr-3">
                <a
                  className="inline-block shadow-lg shadow-violet-500/50   h-12 w-60 p-4 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 hover:animate-bounce text-white text-center text-lg antialiased"
                  href="#"
                  onClick={() => {
                    setSelectedOption("listed");
                  }}
                >
                  Listed
                </a>
              </li>
            </div>
            <div>
              <li className="mr-3">
                <OnboardingButton />
              </li>
            </div>
            {/* <div>
              <li className="mr-3">
                <a
                  className="inline-block shadow-lg shadow-violet-500/50 h-12 w-60 p-4 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 hover:animate-bounce text-white text-center text-lg antialiased"
                  href="#"
                >
                  Sold
                </a>
              </li>
            </div> */}
          </ul>
        </div>
      </div>
    );
  }

  function displayContent(optionSelected) {
    console.log(selectedOption);
    switch (optionSelected) {
      case "collected":
        return <MyAssets />;
      case "listed":
        return loadingState === "loaded" && !nfts.length ? (
          <h1 className="py-20 px-20 text-2xl text-white antialiased">
            No NFTs listed {console.log("No NFT LIsted")}
          </h1>
        ) : (
          renderDashBoardNFT()
        );

      default:
        
        break;
    }
  }

  return (
    <div>
      {renderDashBoardTabs()}
      {/* {NFTlist != null ? renderNFTListed() : ""}
      {NFTCollect != null ? renderNFTCollected() : "No NFT "} */}
      {displayContent(selectedOption)}
    </div>
  );
}

Dashboard.propTypes = {
  loadingState: PropTypes.any.isRequired,
  nfts: PropTypes.array.isRequired,
};
export default Dashboard;
