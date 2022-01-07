import React from "react";

import man1 from "../../../img/about/man-1.jpg";
import man2 from "../../../img/about/man-2.jpg";
import man3 from "../../../img/about/man-3.jpg";

const AboutDescription = ({ showModalHandler }) => {
  const showModal = () => {
    showModalHandler({
      images: [man1, man2, man3],
      index: 0,
      location: window.location.href,
    });
  };

  return (
    <div className="about__content">
      <div className="about__header">
        <img
          className="about__img-man modal-img"
          src={man1}
          alt=""
          onClick={showModal}
        />
        <div className="about__text">
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad animi, consequatur, dolorem dolores enim error et eum facilis hic
            ipsam labore nisi non pariatur quam quasi sunt tenetur voluptatibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad animi, consequatur, dolorem dolores enim error et eum facilis hic
            ipsam labore nisi non pariatur quam quasi sunt tenetur voluptatibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad animi, consequatur, dolorem dolores enim error et eum facilis hic
            ipsam labore nisi non pariatur quam quasi sunt tenetur voluptatibus.
          </p>
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad animi, consequatur, dolorem dolores enim error et eum facilis hic
            ipsam labore nisi non pariatur quam quasi sunt tenetur voluptatibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad animi, consequatur, dolorem dolores enim error et eum facilis hic
            ipsam labore nisi non pariatur quam quasi sunt tenetur voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
