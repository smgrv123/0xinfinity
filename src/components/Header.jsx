import './Header.css'
import Studio from '../assets/Studio-Project 2 - Copy.png'
const Header = () => {
    return ( 
        <div className="Header">
        <h1><span>0x</span>INFINITY LABS</h1>
        <p>Emp<span>o</span>wering Creat<span>o</span>rs</p>
        <button className="regBtn">Register</button>
        <img src={Studio} alt="" className='Headerbg' />
        </div>
     );
}
 
export default Header;