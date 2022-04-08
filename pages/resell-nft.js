/* pages/resell-nft.js */
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function ResellNFT() {
  const [formInput, updateFormInput] = useState({ price: "", image: "" });
  const router = useRouter();
  const { id, tokenURI } = router.query;
  const { image, price } = formInput;

  useEffect(() => {
    fetchNFT();
  }, [id]);

  async function fetchNFT() {
    if (!tokenURI) return;
    const meta = await axios.get(tokenURI);
    updateFormInput((state) => ({ ...state, image: meta.data.image }));
  }

  async function listNFTForSale() {
    if (!price) return;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const priceFormatted = ethers.utils.parseUnits(formInput.price, "ether");
    let contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();

    listingPrice = listingPrice.toString();
    let transaction = await contract.resellToken(id, priceFormatted, {
      value: listingPrice,
    });
    await transaction.wait();

    router.push("/");
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input
          placeholder="Asset Price in MTR"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, price: e.target.value })
          }
        />
        {image && (
          <img className="rounded mt-4 pt-10" width="350" src={image} />
        )}
        <div className="grid justify-items-center pt-10">
          <button
            onClick={listNFTForSale}
            className=" w-1/2 mt-4 rounded p-4 font-medium bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-lg antialiased text-white hover:from-pink-400 hover:to-fuchsia-500"
          >
            LIST ITEM
          </button>
        </div>
      </div>
    </div>
  );
}
