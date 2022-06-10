import React, { useState } from "react";
import "./Modal.css";
import PopImg from "../../assets/formimg.png";

const Modal = ({ setisVisible }) => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [bitAboutYourself, setbitAboutYourself] = useState();

  return (
    <form>
      <div className="Popup">
        <div className="popleft">
          <div className="popup-heading">
            <h1>Got interesting ideas for your next NFT project?</h1>
          </div>
          <div className="popForm">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label htmlFor="">Your Email Address</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label htmlFor="">
              Tell us a bit about yourself and your idea...
            </label>
            <textarea
              rows="5"
              cols="115"
              name="comment"
              value={bitAboutYourself}
              onChange={(e) => {
                setbitAboutYourself(e.target.value);
              }}
            ></textarea>
            {/* <input type="text" /> */}
            {/* <label htmlFor="">Attach your files here</label> */}
            {/* <input type="text" /> */}
            <label>Attach your files here</label>                    <div className="fileContainer">
                      <label for="files" id='labelFile'>Click to choose file...</label>
                  <input type="file" id="files" style={{ visibility: "hidden" }} />
                     </div>
                     <div className="Btn">
            <button className="submit">Submit</button>
            <button
              className="cancel"
              onClick={() => {
                setisVisible(false);
              }}
            >
              Cancel
            </button>
            </div>
          </div>
        </div>
        {/* <div className="popright">
          <img src={PopImg} alt="" />
        </div> */}
      </div>
    </form>
  );
};

export default Modal;
