import React, {useEffect} from 'react'
import './Header.css'
import Studio from '../../assets/Studio-Project 2 - Copy.png'
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({x:0, y:0})
    useEffect(()=>{
      const updateMousePosition = event => {
        setMousePosition({x: event.clientX, y: event.clientY})
        
      }    
     window.addEventListener('mousemove',updateMousePosition);
      return () => window.removeEventListener('mousemove', updateMousePosition)
    },[])
    
      return mousePosition   
}
const Header = () => {
 
      
      let bannerimg = document.querySelector('#banner_head');
      const {x,y} = useMousePosition();
      console.log(x,y);
      if(x>0 && x<550  ){
        bannerimg.style.transform = 'translateX(10rem)';
        bannerimg.style.transition = '3s';
        bannerimg.style.animation = 'bounce 0.5s';
        // bannerimg.style.overflow="hidden";
      }
     else if(x>765&& x<1000){
      bannerimg.style.transform = 'translateX(-10rem)';
      bannerimg.style.transition = '3s';
      bannerimg.style.animation = 'bounce 0.5s';
    //   bannerimg.style.overflowX="hidden";
     }
    return (
        <div className="Header">
            <h1 id='banner_head'><span>0x</span>INFINITY LABS</h1>
            <p>Emp<span>o</span>wering Creat<span>o</span>rs</p>
            <button className="regBtn">Register</button>
            <img src={Studio} alt="" className='Headerbg' />
        </div>
    );
}

export default Header;