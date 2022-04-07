/* pages/dashboard.js */
import PropTypes from "prop-types";
import React from "react";

function Dashboard({ nfts, loadingState }) {
  /**
   * Returns list of NFTs on dashboard
   */
  function renderDashBoardNFT() {
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

  return (
    <div>
      {" "}
      {loadingState === "loaded" && !nfts.length ? (
        <h1 className="py-10 px-20 text-3xl">No NFTs listed</h1>
      ) : (
        renderDashBoardNFT()
      )}{" "}
    </div>
  );
}

Dashboard.propTypes = {
  loadingState: PropTypes.any.isRequired,
  nfts: PropTypes.array.isRequired,
};
export default Dashboard;
