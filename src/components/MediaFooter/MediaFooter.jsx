import React from 'react'
import './MediaFooter.css'
import mediahome from '../../assets/mediahome.png'
import mediaheart from '../../assets/mediaheart.png'
import mediapackage from '../../assets/mediapackage.png'
import mediacart from '../../assets/mediacart.png'
import myaccount from '../../assets/myaccount.png'
import { useHistory } from "react-router-dom";


function MediaFooter() {
let history = useHistory();
  
    function handleClick() {
      history.push("/signup");
    }
    function handleHome(){
      history.push('/')
    }

  return (
    <div id="MediaFooterconteriner">
      
      <nav className="mobile-nav">
        <a href="#" className="bloc-icon">
          <div align="center"><img src={mediahome} alt="" />
          <div align="center"><button className="btnFooter" onClick={handleHome}>Home</button> </div></div>
        </a>
        <a href="#" className="bloc-icon">
         <div align="center"> <img src={mediaheart} alt="" />
         <div align="center"><button className="btnFooter">Wishlist</button> </div></div>
        </a>
        <a href="#" className="bloc-icon">
         <div align="center"><img src={mediapackage }alt="" />
         <div align="center"><button className="btnFooter">Sourcing</button></div></div> 
        </a>
        <a href="#" className="bloc-icon">
        <div align="center"><img src={mediacart}alt="" />
        <div align="center"><button className="btnFooter">Cart</button></div></div> 
        </a>
        <a href="#" className="bloc-icon">
        <div align="center"><img src={myaccount}alt="" />
        <div align="center"> <button className="btnFooter" onClick={handleClick}>My Account</button></div></div>
        </a>
      </nav>
    </div>
  )
}

export default MediaFooter
