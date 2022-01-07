import React, { useEffect, useRef, useState } from "react";
import man1 from "../../img/about/man-1.jpg";
import man2 from "../../img/about/man-2.jpg";
import man3 from "../../img/about/man-3.jpg";

const Slider = ({ images, showModalHandler }) => {
  const [img, setImg] = useState(null);
  const [position, setPosition] = useState(0);
  const ul = useRef(null);

  useEffect(() => setImg(document.querySelector(".slider__img")), []);

  const showModal = (index) => {
    showModalHandler({
      images: images.map((img) => img.img),
      index: index,
      location: window.location.href,
    });
  };

  const imgNext = () => {
    const width = img.offsetWidth;
    if (position - width > -images.length * width) {
      setPosition((prev) => {
        ul.current.style.marginLeft = prev - width + "px";
        return prev - width;
      });
    }
  };

  const imgPrev = () => {
    const width = img.offsetWidth;
    if (position + width <= 0) {
      setPosition((prev) => {
        ul.current.style.marginLeft = prev + width + "px";
        return prev + width;
      });
    }
  };

  return (
    <div className="slider">
      <button type="button" onClick={imgPrev}>
        prev
      </button>
      <div className="slider__container">
        <ul ref={ul} style={{ width: `${images.length * 100}%` }}>
          {images.map((img, index) => (
            <li key={img.id}>
              <img
                src={img.img}
                alt="qwe"
                className="slider__img modal-img"
                onClick={() => showModal(index)}
              />
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={imgNext}>
        next
      </button>
    </div>
  );
};

export default Slider;
