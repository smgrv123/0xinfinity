import Logo from "../assets/logo.png";
import Hamburger from '../assets/hamburger.png';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="hamroute">
      <img src={Hamburger} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
