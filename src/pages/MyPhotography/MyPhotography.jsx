import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import './MyPhotography.css'

import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

function MyPhotography() {
  const [tabSelected, setTabSelected] = useState(null);

  const tabheader={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    border:' 0.5px solid rgba(0, 0, 0, 0.25)',
    width:'auto',
    padding:'10px',
    fontWeight:'800',
    height:'50px',
    alignItems:'center',
    borderRadius:"10px",
    margin:'15px 5px 15px 5px'  
  }

  const buttonheader={
    backgroundColor:'#FDE31A',
    borderRadius:'15px',
    width:'auto',
    alignItems:'center',
    height:'80px',
    alignSelf:'center'
    
  }

  const tabpanls={
    padding:'30px',

  }
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };

  const serchbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    borderRadius:'10px',
    width:'150px',
    padding:'5px',
    outlineColor:'#FDE31A',
    fontWeight:'800',
    marginTop:'20px'
    
    
     }
    
     const Clearbtn={
        backgroundColor:'black',
        borderColor:'transparent',
        borderRadius:'10px',
        width:'150px',
        padding:'5px',
        marginLeft:'1px',
        fontWeight:'800',
        color:'white',
        marginTop:'20px'
       
     }


  
  return (
    <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2' style={{backgroundColor:'#31343A'}}><Sidebar /></div>
        <div className='col-10'>
       
      <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
      <div className='headingAll'><h2>My Photography</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className='tablist' >
                
                <Tab  className={ `tabbtn ${tabSelected === 1 ? "selected-tab" : ""}`}
                    onClick={() => handelTabCLick(1)}>Existing Product In Your Store</Tab>
                <Tab className={`tabbtn ${tabSelected === 2 ? "selected-tab" : ""}`}
                    onClick={() => handelTabCLick(2)}>Individual Product</Tab>
                
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
              <div className='container' style={{width:'800px'}}>
                <div className='flexcontainer'>
                  <div className='flexleft'>
                   <h4>Select Store</h4>
                  </div>
                  <div className='flexright'>
                    <input style={{width:'300px'}} type="text" />
                    <div><input  style={{width:'300px'}} type="text" /></div>
                  </div>
                </div>
               
                <div className='flexcontainer'>
                  <div className='flexleft'>
                  <h4>Accept Similar Products</h4>
                  </div>
                  <div className='flexright' style={{marginRight:'210px'}}>
                  <h5><input type="checkbox" style={{width:'30px'}} /> <span >Yes</span><input style={{width:'30px'}} type="checkbox" />No</h5>
                    
                  </div>
                </div>
                <div className='flexcontainer'>
                  <div className='flexleft'>
                  <h4>Shooting</h4>
                  </div>
                  <div className='flexright' style={{marginRight:'160px'}}>
                  <h5><input style={{width:'30px'}} type="checkbox" /> <span >Video</span><input style={{width:'30px'}} type="checkbox" />Photo</h5>
                  </div>
                </div>
                <div className='flexcontainer'>
                  <div className='flexleft'><h4>Requirement</h4></div>
                  <div className='flexright'>
                    <textarea className='textares'  name="" id="" cols="40" rows="10"></textarea>
                  </div>
                </div>
              </div>
               <div style={{display:'flex',marginLeft:'53%'}}>
                <div><button style={serchbtn}>Submit</button></div>
                <div style={{marginLeft:'2px'}}><button style={Clearbtn}>Clear</button></div>
              </div>
            </Tab.Panel>
            <Tab.Panel>

               <div className='container' style={{width:'800px'}}>
                <div className='flexcontainer'>
                  <div className='flexleft'>
                   <h4>Product Title</h4>
                  </div>
                  <div className='flexright'>
                    <input style={{width:'300px'}} type="text" />
                    <div><input  style={{width:'300px'}} type="text" required /></div>
                  </div>
                </div>
               
                <div className='flexcontainer'>
                  <div className='flexleft'>
                  <h4>Product URL</h4>
                  </div>
                  <div className='flexright' style={{marginLeft:'130px'}}>
                   <div><input  style={{width:'300px'}} type="text" required /></div>

                    
                  </div>
                </div>
                <div className='flexcontainer'>
                  <div className='flexleft'>
                  <h4>Accept Similar Products</h4>
                  </div>
                  <div className='flexright' style={{marginRight:'210px'}}>
                  <h5><input style={{width:'30px'}} type="checkbox" /> <span >Yes</span><input style={{width:'30px'}} type="checkbox" />No</h5>
                  </div>
                </div>
                  <div className='flexcontainer'>
                  <div className='flexleft'>
                  <h4>Shooting Type</h4>
                  </div>
                  <div className='flexright'  style={{marginRight:'170px'}}>
                  <h5><input style={{width:'30px'}} type="checkbox" /> <span >Video</span><input style={{width:'30px'}} type="checkbox" />Photo</h5>
                  </div>
                </div>
                <div className='flexcontainer'>
                  <div className='flexleft'><h4>Requirement</h4></div>
                  <div className='flexright'>
                    <textarea className='textares'  name="" id="" cols="40" rows="10"></textarea>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',marginLeft:'53%'}}>
                <div><button style={serchbtn}>Submit</button></div>
                <div style={{marginLeft:'2px'}}><button style={Clearbtn}>Clear</button></div>
              </div>
            </Tab.Panel>
            
          </Tab.Panels>
    </Tab.Group>
      </div>
        </div>
      </div>
    </div>
  )
}

export default MyPhotography
