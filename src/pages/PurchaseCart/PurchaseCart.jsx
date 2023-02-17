import React, { useEffect } from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useHistory } from 'react-router-dom';
function PurchaseCart() {

  const history=useHistory()
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      history.push("/PurchaseCart");
     
    } else {
      history.push("/signin");
    }
  }, []);
  return (
    <div>
    <div>
      <Adminnavbar />
    </div>
    <div className='row'>
    <div className='col-2'><Sidebar /></div>
    <div className='col-2'>
    <div style={{ display: 'block', width:'1140px', }}>
    
    <Tabs defaultActiveKey="eighth">
      <Tab eventKey="first" title="One Price Dropship">
       <button style={{marginTop:'100px',marginLeft:'400px',backgroundColor:'#FFE51A',borderColor:'transparent',padding:'10px',borderRadius:'10px',width:'200px'}}>Add a Product</button>
      </Tab>
      <Tab eventKey="second" title="Wholeshale">
      <button style={{marginTop:'100px',marginLeft:'400px',backgroundColor:'#FFE51A',borderColor:'transparent',padding:'10px',borderRadius:'10px',width:'200px'}}>Add a Product</button>
      </Tab>
      <Tab eventKey="third" title="Preorder Inventry">
      <button style={{marginTop:'100px',marginLeft:'400px',backgroundColor:'#FFE51A',borderColor:'transparent',padding:'10px',borderRadius:'10px',width:'200px'}}>Add a Product</button>
      </Tab>

    </Tabs>
  </div>
    </div>
    </div>
   
  </div>
  )
}

export default PurchaseCart