import React from 'react'
import './css/Navbar.css'


const Navbar = () => {
  return (
    <>
    <div className="container-fluid navmain">
       <div className="navleft">
         <div className="logo">
            <img src="./images1/hlogo1.png" alt="" />
         </div>
       </div>
       <div className="navmid">
      
           <h1><span id='firsth'>S</span>HRI <span id="firsth">S</span>ANT   <span id="firsth">K</span>ABEER <span id="firsth">C</span>ONVENT <span id="firsth">H</span>. <span id="firsth">S</span>. <span id="firsth">S</span>CHOOL</h1>
           <p>Learning today. Leading tomorrow. Inspired Forever.</p>
       </div>
       <div className="navright">
            <div className="socialmedia">
            <a href="" target="_blank"style={{textDecoration:"none",color:"white"}}> <i className="ri-facebook-fill"></i></a>

            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-youtube-line"></i>
            </div>
            <div className="seacrch">
                <input className='aa' type="search" />
                <div className="btn" style={{backgroundColor:"#F8D34D"}}>Search</div>
            </div>
           

       </div>





    </div>
    
    
    
    
    
    </>
  )
}

export default Navbar