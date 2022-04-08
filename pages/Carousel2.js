import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel2 = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImg] = useState(["img2.jpg", "img3.jpg", "img1.jpg"]);
  const img = ["img2.jpg", "img3.jpg", "img1.jpg"];
  /**
   * Render the next card when the user clicks on right button
   */
  let moveRight = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  /**
   * Render the next card when the user clicks on left button
   */
  let moveLeft = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(img.length - 1);
    }
  };
  <button></button>;
  return (
    <div className="">
      <div className="flex justify-center pt-10 pb-20">
        <button type="button" className="btn text-2xl" onClick={moveLeft}>
          <Image src="/arrowleft.png" height={30} width={30} />
        </button>

        {images.slice(currentImage, currentImage + 1).map((img, index) => (
          <div className="card w-75" key={index}>
            <div className="">
              <div className="carosel-img-body">
                <img
                  src={img}
                  alt="cannot render image"
                  className="carosel-img rounded-2xl shadow-2xl shadow-cyan-400/60"
                />
                <div className="viewDrop grid justify-items-center pt-3">
                  <Link href="/Drop">
                    <button
                      id="dropButton "
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg shadow-cyan-500/50 hover:animate-pulse "
                    >
                      View Drop
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button type="button" className="btn  " onClick={moveRight}>
          <Image src="/arrowright.png" height={30} width={30} />
        </button>
      </div>
      <div className="text-3xl text-center text-white hover:text-violet-300 hover:animate-pulse antialiased ">
        {"Discover the Milkiverse"}
      </div>
    </div>
  );
};

export default Carousel2;
