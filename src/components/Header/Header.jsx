import React, { useEffect, useState } from "react";
import $ from "jquery";
import "reactjs-popup/dist/index.css";

import "./Header.css";
import Modal from "../Modal/Modal";

const Header = () => {
  const [isVisible, setisVisible] = useState(false);

  $(window).mousemove(function (event) {
    if ($(window).width() >= 1024) {
      $("#banner_head").css({
        "margin-left": -(event.pageX * 0.05),
        "margin-top": -(event.pageY * 0.05),
        "margin-bottom": (event.pageY * 0.05),
      });
    }
  });

  return (
    <div className="Header">
      <h1 id="banner_head">
        <span>0x</span>INFINITY LABS
      </h1>
      <p>
        Emp<span>o</span>wering Creat<span>o</span>rs
      </p>
      <p id="banner_p">
        We help artists, creators and IP owners turn their unique ideas for an
        NFT project into reality, from conceptualization to post launch support,
        all in one place!
      </p>
      <button
        className="regBtn"
        onClick={() => {
          console.log("first");
          setisVisible(true);
        }}
      >
        Let's Buidl
      </button>
      {isVisible ? (
        <div className="popup">
          <Modal setisVisible={setisVisible} />
        </div>
      ) : null}
      {/* <img src={Studio} alt="" className="Headerbg" /> */}
    </div>
  );
};

export default Header;
