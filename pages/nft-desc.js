import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function NFTDesc() {
  let router = useRouter();
  console.log("FROM URL", router.query);
  async function buyNft(_nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(_nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(_nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    // loadNFTs();
    // refresh and go to Home page 
    router.push("/");
  }
  return (
    <section>
      <div className="relative max-w-screen-xl px-10 py-20 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="flex justify-center">
              <img
                alt="Mobile Phone Stand"
                className="object-cover rounded-xl"
                src={router.query.image}
              />
            </div>
          </div>

          <div className="sticky top-0">
            {/* <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600"> Pre Order </strong> */}

            <div className="flex justify-between mt-8">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl text-white font-bold">
                  {router.query.name}
                </h1>

                <p className="mt-0.5 text-sm text-white">
                  {router.query.description}
                </p>
              </div>

              <p className="text-lg text-white font-bold">
                {router.query.price}MTR
              </p>
            </div>

            <details className="relative mt-4 group">
              <summary className="block">
                <div className="prose max-w-none group-open:hidden">
                  <p className="text-white">Owner : {router.query.owner}</p>
                  <p className="text-white">Seller : {router.query.seller}</p>
                </div>
                <button
                  className="mt-4 w-1/2 p-2 mt-4 text-md font-medium bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-lg antialiased text-white hover:from-pink-400 hover:to-fuchsia-500"
                  onClick={() => buyNft(router.query)}
                >
                  BUY NFT
                </button>
              </summary>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
