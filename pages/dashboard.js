/* pages/dashboard.js */
import PropTypes from "prop-types";
import React, { useState } from "react";

function Dashboard({ nfts, loadingState }) {
  const [NFTlist, setNFTlist] = useState(null);
  const rend_fun = () => {
    console.log("handled created");
    return loadingState === "loaded" && !nfts.length ? (
      <h1 className="py-20 px-20 text-3xl text-white antialiased">
        No NFTs listed {console.log("No NFT LIsted")}
      </h1>
    ) : (
      renderDashBoardNFT()
    );
  };
  /**
   * Returns list of NFTs on dashboard
   */
  function renderDashBoardNFT() {
    console.log("handled renderDashBoardNFT");
    return (
      <div className="dashBoard">
        <div className="p-4">
          <h2 className="text-2xl py-2">Items Listed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {nfts.map((nft, i) => (
              <div
                key={nft.tokenId}
                className="border shadow rounded-xl overflow-hidden"
              >
                <img src={nft.image} className="rounded" />
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">
                    Price - {nft.price} Eth
                  </p>
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
      <div className="flex justify-center pt-60 ">
        <div className="grid justify-items-center">
          <ul className="flex justify-between gap-20">
            <div>
              <li className="mr-3">
                <a
                  className="inline-block shadow-lg shadow-violet-500/50  h-12 w-60 p-4 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 hover:animate-bounce text-white text-center text-lg antialiased"
                  href="#"
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
                  onClick={() => setNFTlist(1)}
                >
                  Created
                </a>
              </li>
            </div>
            <div>
              <li className="mr-3">
                <a
                  className="inline-block shadow-lg shadow-violet-500/50 h-12 w-60 p-4 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 hover:animate-bounce text-white text-center text-lg antialiased"
                  href="#"
                >
                  Sold
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderDashBoardTabs()}
      {NFTlist != null ? rend_fun() : "No NFTs"}
    </div>
  );
}

Dashboard.propTypes = {
  loadingState: PropTypes.any.isRequired,
  nfts: PropTypes.array.isRequired,
};
export default Dashboard;
