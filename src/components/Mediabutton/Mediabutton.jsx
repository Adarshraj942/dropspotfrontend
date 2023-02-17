import React from 'react'
import './Mediabutton.css'
import shippingbtn from'../../assets/shippingbtn.png'
import settingbtn from'../../assets/settingbtn.png'
import catogrybtn from'../../assets/catogrybtn.png'
import  '../../pages/ShippingCost/ShippingCost'
import { useHistory } from "react-router-dom";



function Mediabutton() {
  const history = useHistory();
  
  const ShippingCost = () => {
      history.push("/ShippingCost")
  } 
 



  return (
    <div id='mediabutton'>
      <div  className="container-fluid">
        <div align="center" className="row" >
            <div className="col"><button id='catory' onClick={ShippingCost}><img  src={shippingbtn}  alt="" />
            </button>
            <div><p style={{fontSize:'12px'}}>Shipping Calculation</p></div> </div>
            <div className="col"><button id='catory' ><img src={catogrybtn} alt="" /> </button>
            <div><p style={{fontSize:'12px'}}> Our Catogries</p></div> </div>
            <div className="col"><button id='catory' > <button type="button" class="btn"><img  src={settingbtn}  alt="" /></button></button>
            <div><p style={{fontSize:'12px'}}> Our Services</p></div> </div>
            <div >
            </div>
            <div>
       
           
        </div>
        
          
          
        </div>
      </div>
    </div>
  )
}

export default Mediabutton
