import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import PopImg from '../../assets/formimg.png';
import "./Header.css";
import Studio from "../../assets/Studio-Project 2 - Copy.png";
import $ from 'jquery';
import Modal from "../Modal/Modal";
// import { isVisible } from "@testing-library/user-event/dist/utils";
const Header = () => {
  const [isVisible, setisVisible] = useState(false);
  $(window).mousemove(function (event) {
    if ($(window).width() >=1024) {
    $("#banner_head").css({
      "margin-left": -(event.pageX * 0.05),
      "margin-top": -(event.pageY * 0.05),
      "margin-bottom": (event.pageY * 0.05),
    });
  }
  });

//   return (
//     <div className="Header" id="hea">
//       <h1 id='banner_head' className="move"><span>0x</span>INFINITY LABS</h1>
//       <p>Emp<span>o</span>wering Creat<span>o</span>rs</p>
//       <p id="banner_p">We help artists, creators and IP owners turn their unique ideas for an NFT project into reality, from conceptualization to post launch support, all in one place!</p>
//       <div className="popwrap">
//         <Popup trigger={<button className="regBtn">Let's Buidl</button>} modal nested>
//           {() => (
//             <form>
//               <div className="Popup">
//                 <div className="popleft">
//                   <div className="popup-heading">
//                     <div>
//                       <h1>Got interesting ideas for your NFT project?</h1>
//                     </div>
//                     <div className='cross'>
//                       <button>x</button>
//                     </div>
//                   </div>
//                   <div className="popForm">
//                     <label htmlFor="">Your Name</label>
//                     <input type="text" />
//                     <label htmlFor="">Your Email Address</label>
//                     <input type="text" />
//                     <label htmlFor="">Tell us a bit about yourself and your idea...</label>
//                     <textarea rows="5" cols="115" name="comment" ></textarea>
//                     {/* <input type="text" /> */}
//                     <label>Attach your files here</label>
//                     <div className="fileContainer">
//                       <label for="files" id='labelFile'>Click to choose file...</label>
//                       <input type="file" id="files" style={{ visibility: "hidden" }} />
//                     </div>
//                     <div className='submission'>
//                       <button className='submit' type="submit">Submit</button>
//                       <button className='cancel'>Cancel</button>
//                     </div>
//                   </div>
//                 </div>
//                 {/*<div className="popright">
//                 <img src={PopImg} alt="" />
//         </div>*/}
//               </div>
//             </form>
//           )}
//         </Popup>

//       </div>
//       <img src={Studio} alt="" className='Headerbg' />
//     </div>
//   );
// };

// export default Header;











  return (
    <div className="Header">
      <h1 id="banner_head">
        <span>0x</span>INFINITY LABS
      </h1>
      <p>
        Emp<span>o</span>wering Creat<span>o</span>rs
      </p>
      <button
        className="regBtn"
        onClick={() => {
          console.log("first");
          setisVisible(true);
        }}
      >
        Register
      </button>
      {isVisible ? (
        <div
          className="popup"
          // trigger={<button className="regBtn">Register</button>}
          // modal
          // nested
          // position={'center'}
        >
          {/* {() => ( */}
          <Modal setisVisible={setisVisible} />
          {/* )} */}
        </div>
      ) : null}
      <img src={Studio} alt="" className="Headerbg" />
    </div>
  );
};

export default Header;