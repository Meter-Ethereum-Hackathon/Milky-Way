/* pages/dashboard.js */


/* change ethers.js to web3.js/meterify */
// import { ethers } from "ethers";
import { meterify as mtr } from "meterify";
import Web3 from "web3";
//



import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

// add detection of MetaMask
// import detectEthereumProvider from '@metamask/detect-provider';
//

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function CreatorDashboard() {

  

  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    console.log(connection)
    /* change ethers.js to web3.js */
    // const provider = new ethers.providers.Web3Provider(connection);
    // const signer = provider.getSigner();
    const meterify = new Web3(connection);
    // const meterify = mtr(web3_meter);

    /* change ethers.js to web3.js */
    // const contract = new ethers.Contract(
    //   marketplaceAddress,
    //   NFTMarketplace.abi,
    //   signer
    // );
    console.log("good", meterify)
    const contract = new meterify.eth.Contract(
      NFTMarketplace.abi,
      marketplaceAddress, 
    );

    /* change ethers.js to web3.js */
    // const data = await contract.fetchItemsListed();
    const data = await contract.methods.fetchItemsListed().call();

    const items = await Promise.all(
      data.map(async (i) => {
        /* change ethers.js to web3.js */
        // const tokenUri = await contract.tokenURI(i.tokenId);
        const tokenUri = await contract.methods.tokenURI(i.tokenId).call();
        const meta = await axios.get(tokenUri);

        /* change ethers.js to web3.js */
        // let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let price = meterify.utils.fromWei(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId,
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        };
        return item;
      })
    );

    setNfts(items);
    setLoadingState("loaded");
  }
  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="py-10 px-20 text-3xl">No NFTs listed</h1>;
  return (
    <div className="dashBoard">
      <div className="p-4">
        <h2 className="text-2xl py-2">Items Listed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
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
