import Logo from "../assets/logo.png";
import Hamburger from '../assets/hamburger.png';
import Discord from '../assets/discord.png';
import Twitter from '../assets/twitter.png';

import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="SocialMedia">
      <img src={Twitter} alt="" className="Twit"/>
        <img src={Discord} alt="" className="Disc"/>
       
      </div>
      <div className="hamroute">
      <img src={Hamburger} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
