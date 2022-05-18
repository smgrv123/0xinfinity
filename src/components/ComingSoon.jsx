import './ComingSoon.css'
import comingSoon from '../assets/comingup.png'
const ComingSoon = () => {
    return ( 
        <div className="ComingSoon" id='pass'>
            <p>INFINITY PASS</p>
            <h1>S<span>O</span>METHING’S COMING UP</h1>
            <img src={comingSoon} alt="" />
            {/* <div className='Comingimg'>
            
            </div> */}
            
        </div>
     );
}
 
export default ComingSoon;