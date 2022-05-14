// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import '../components/Footer.css';
import Discord from '../assets/discord.png';
import Twitter from '../assets/twitter.png';
const Footer = () => {
    return (  
        <footer>
            <div className="footer">
                <div className="footerCont">
                    <p>LOVED OUR WORK?</p>
                    <h1>get in t<span>o</span>uch</h1>
                    <br />
                    <a href="mailto:team@0xinfinitylabs.com">team@0xinfinitylabs.com</a>
                </div>
                <div className="socialMedia">
                    <div className="Discord">
                    <img src={Discord} alt="" />
                    {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
                    <a href="discord.gg/cS7SZEHx4J">discord.gg/cS7SZEHx4J</a>
                    </div>
                    <div className="Twitter">
                    <img src={Twitter} alt="" />
                    <a href="twitter.com/0xinfinity_labs">twitter.com/0xinfinity_labs</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
 
export default Footer;