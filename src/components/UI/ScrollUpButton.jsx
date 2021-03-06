import React from "react";
import { useEffect, useRef } from "react";

import arrowUp from "../../img/UI/arrow-up.svg";

const ScrollUpButton = () => {
  const buttonUp = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const pageHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollTop;

      if (scrollHeight / pageHeight < 1) {
        buttonUp.current.className = "up-buttonUp up-button_hidden";
      }

      if (scrollHeight / pageHeight > 1) {
        buttonUp.current.className = "up-buttonUp up-button_show";
      }
    });
  }, []);

  const scrollUp = (to, duration = 700) => {
    const element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(
          easeInOutQuad(currentTime, start, change, duration)
        );
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          element.scrollTop = to;
        }
      };
    animateScroll();
  };

  return (
    <button
      className="up-button up-button_hidden"
      onClick={() => scrollUp(0, 400)}
      ref={buttonUp}
    >
      <img src={arrowUp} alt="" />
    </button>
  );
};

export default ScrollUpButton;
