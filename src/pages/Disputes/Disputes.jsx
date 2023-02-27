import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import './Disputes.css'

import { Tab } from '@headlessui/react';


const Disputes = () => {
    const serachbtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        padding:'5px',
        width:'100px',
        borderRadius:'5px',
        fontSize:'15px',
        fontWeight:'400'
      }

      const skubnt={
        width:'300px',
        height:'35px',
        borderColor:'transparent',
      
        borderRadius: '86px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '15px',
        paddingLeft: '20px',
      
      
      
        outlineColor:'transparent', 
      }
      
      const skubntselect={
        width:'300px',
        height:'35px',
        borderColor:'transparent',
      
        borderRadius: '86px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '15px',
        paddingLeft: '20px',
      marginTop:'20px',
      
      
        outlineColor:'transparent', 
      }
 
      const skubntsel={
        width:'300px',
        height:'35px',
        borderColor:'transparent',
      
        borderRadius: '86px',
       
        backgroundColor:'rgba(231, 231, 231, 1)',
        color: 'rgba(50, 51, 58, 1)',
        fontSize: '15px',
        paddingLeft: '20px',
      marginTop:'20px',
      
      
        outlineColor:'transparent', 
       
      }
      
  const tabheader={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
   
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

   
  return (
    <div>
          <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
        <div className='col-10'>
       
        <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
        <div className='headingAll'><h2>Disputes</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className='tablist' >
                
                <Tab  className='tabbtn'>Awaiting Responses</Tab>
                <Tab className='tabbtn'>Completed</Tab>
                <Tab className='tabbtn'>Closed</Tab>
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }}>
           
           <div className='row' >
           <div className='Dashboardheading'><h3>Awaited Responses</h3></div>
            <div className='col-4'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>
           
            <div className='col-8'><input type="text" style={skubnt}  placeholder='Abnormal Orders' /><button style={serachbtn}>Search</button></div>
            <div className='col-2'><select  name="name" id="value" style={skubntselect}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px',borderRadius:'20px'}}>
           
           <div className='col'><p> Order Number</p></div>
          
           <div className='col'><p>Tracking Number</p></div>
           <div className='col'><p>Dispute Reason</p></div>
           <div className='col'>
           <p>Expected Solution</p>
           </div>
           <div className='col'>
           <p>Created Date</p>
           </div>
           <div className='col'>
            <p>Status</p>
           </div>
           <div className='col'>
            <p>Action</p>
           </div>
          
          
         </div> 
        </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }} >
            <div className='Dashboardheading'><h3>Completed</h3></div>
      <div className='row' >
            <div className='col-4'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>

            <div className='col-8'><input type="text"  style={skubnt}   placeholder='Abnormal Orders' /><button style={serachbtn}>Search</button></div>
            <div className='col-2'><select  name="name" id="value" style={skubntsel}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px',borderRadius:'20px'}}>
            <div className='col'><p> Order Number</p></div>
            <div className='col'><p> Order Number</p></div>
            <div className='col'>
            <p>Tracking Number</p>
            </div>
            <div className='col'><p>Tracking Number</p></div>
            <div className='col'><p>Dispute Reason</p></div>
            <div className='col'>
            <p>Expected Solution</p>
            </div>
            <div className='col'>
            <p>Created Date</p>
            </div>
            <div className='col'><p>Status</p></div>
            <div className='col'><p>Action</p></div>
          
            
          </div>
      </div>
            </Tab.Panel>
            <Tab.Panel>
                                
       <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px' }} >
       <div className='Dashboardheading'><h3>Closed</h3></div>
       <div className='row'  style={{marginTop:'20px'}}>
            <div className='col-4'><input type="date" style={skubnt}  placeholder='Please enter order number' /></div>

            <div className='col-8'><input type="text" style={skubnt}   placeholder='Abnormal Orders' /><button style={serachbtn}>Search</button></div>
            <div className='col-2'><select  name="name" id="value" style={skubntsel}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px',borderRadius:'20px'}}>
            <div className='col'><p> Order Number</p></div>
          
            <div className='col'>
            <p>Tracking Number</p>
            </div>
            <div className='col'><p>Tracking Number</p></div>
            <div className='col'><p>Dispute Reason</p></div>
            <div className='col'>
            <p>Expected Solution</p>
            </div>
            <div className='col'>
            <p>Created Date</p>
            </div>
           <div className='col'><p>Status</p></div>
           <div className='col'><p>Action</p></div>
          </div>
       </div>
            </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Disputes
