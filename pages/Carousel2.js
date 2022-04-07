import React, { useState } from "react";
import style from "../styles/style.module.css";
// import { images } from "./images";

const Carousel2 = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImg] = useState(["img1.jpg", "img2.jpg", "img3.jpg"]);

  /**
   * Render the next card when the user clicks on right button
   */
  let moveRight = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  /**
   * Render the next card when the user clicks on left button
   */
  let moveLeft = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };
  <button></button>;
  return (
    <div className="">
      <div className="flex justify-center ">
        {/* <div className=""> */}
        <button
          type="button"
          className="btn bg-orange-500 h-5 my-10"
          onClick={moveLeft}
        >
          HACK
        </button>
        {/* </div> */}
        {images.slice(currentImage, currentImage + 1).map((img, index) => (
          <div className="card w-75" key={index}>
            <div className="carosel-img-body">
              <img
                src={img}
                alt="cannot render image"
                className="carosel-img"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn bg-orange-500 h-5 my-10"
          onClick={moveRight}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
