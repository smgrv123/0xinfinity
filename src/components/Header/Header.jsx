import React, { useEffect } from 'react'
import './Header.css'
import Studio from '../../assets/Studio-Project 2 - Copy.png'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopImg from '../../assets/formimg.png';
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  useEffect(() => {
    const updateMousePosition = event => {
      setMousePosition({ x: event.clientX, y: event.clientY })

    }
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}
const Header = () => {
var move;

  let bannerimg = document.querySelector('#banner_head');
  const { x, y } = useMousePosition();
  console.log(x, y);
  if (x > 0 && x < 550) {
    bannerimg.style.transform = 'translateX(2rem)';
    bannerimg.style.transition = '3s';
    bannerimg.style.animation = 'bounce 0.5s';
    // bannerimg.style.overflow="hidden";
  }
  else if (x > 765 && x < 1000) {
    bannerimg.style.transform = 'translateX(-2rem)';
    bannerimg.style.transition = '3s';
    bannerimg.style.animation = 'bounce 0.5s';
    //   bannerimg.style.overflowX="hidden";
  }
  return (
    <div className="Header">
      <h1 id='banner_head'><span>0x</span>INFINITY LABS</h1>
      <p>Emp<span>o</span>wering Creat<span>o</span>rs</p>

      <Popup trigger={<button className="regBtn">Register</button>} modal nested>
        {() => (
          <form>
            <div className="Popup">
              <div className="popleft">
                <div className="popup-heading">
                  <h1>Got interesting ideas for your next NFT project?</h1>
                </div>
                <div className="popForm">
                  <label htmlFor="">Your Name</label>
                  <input type="text" />
                  <label htmlFor="">Your Email Address</label>
                  <input type="text" />
                  <label htmlFor="">Tell us a bit about yourself and your idea...</label>
                  <textarea rows="5" cols="74" name="comment" ></textarea>
                  {/* <input type="text" /> */}
                  <label htmlFor="">Attach your files here</label>
                  <input type="text" />
                  <button className='submit'>Submit</button>
                  <button className='cancel'>Cancel</button>
                </div>
              </div>
              <div className="popright">
                <img src={PopImg} alt="" />
              </div>
            </div>
          </form>
        )}
      </Popup>
      <img src={Studio} alt="" className='Headerbg' />
    </div>
  );
}

export default Header;