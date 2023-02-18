import React from 'react'

import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function UndeleviredOrder() {
    const serchbtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        width:'100px',
        padding:'5px',
        outlineColor:'#FDE31A'
        
        
         }

         const paybtn={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            
            padding:'5px',
            outlineColor:'#FDE31A',
            width:'100px'  
         }
        
         const Clearbtn={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            width:'80px',
            padding:'5px',
            marginLeft:'1px'  
         }
        
         const Order={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            fontWeight:'400',
            fontSize:'15px',
           
          
         }
        
         const inputbox={
            outlineColor:'#FDE31A',
            width:'200px',
            innerHeight:'30px',
            borderColor:'#FDE31A'
         }
         const Pickbtn={
            backgroundColor:'#FDE31A',
            borderColor:'transparent',
            borderRadius:'10px',
            width:'150px',
            padding:'5px',
            outlineColor:'#FDE31A',
            marginLeft:'5px'
             
         }
        
  return (
    <div>
      <div>
        <Adminnavbar />
      </div>
      <div className='row'>
      <div className='col-2'><Sidebar /></div>
      <div className='col-2'>
      <div style={{ display: 'block', width:'1140px', }}>
      
      <Tabs defaultActiveKey="first" style={{backgroundColor:'rgba(255, 214, 0, 1)'}}>
        <Tab eventKey="first" title="Awaiting Payments">
          <div className='row' style={{marginTop:'20px'}}>
            <div className='col-6'><input style={inputbox} type="text"  placeholder='please enter order number' /><span><button style={serchbtn}>Search</button></span></div>
            <div className='col-2'><span><button style={paybtn}>Pay</button></span></div>
            <div className='col-2'><span><button style={serchbtn}>Upload Excel</button></span></div>
            <div className='col-2'><span><button style={serchbtn}>Download Excel</button></span></div>
            
           

          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>

            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Store Order number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Local Carrier Contact Info</button></div>
            <div className='col'><button style={Order}>Resending Fee ($)</button></div>
            <div className='col'><button style={Order}>Deadline</button></div>
            <div className='col'><button style={Order}>Note</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>


          </div>
        </Tab>
        <Tab eventKey="second" title="Paid">
        <div className='row' style={{marginTop:'20px'}}>
            
                <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>submit</button></span></div>
                

          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Store Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Local Carrier Contact Info</button></div>
            <div className='col'><button style={Order}>Resending Fee ($)</button></div>
            <div className='col'><button style={Order}>Deadline</button></div>
            <div className='col'><button style={Order}>Note</button></div>
          
           
            <div className='col'><button style={Order}>Shipping Info</button></div>
      


          </div>
        </Tab>
        <Tab eventKey="third" title="Awaiting Pickup at local Post office">
        <div className='row' style={{marginTop:'20px'}}>
            
            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>submit</button></span><button style={Pickbtn}>Pickup Notification</button></div>
            

      </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            
            <div className='col'><button style={Order}>Quantity</button></div>
          
           
            <div className='col'><button style={Order}>Paid Time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Tracking Number </button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
        </Tab>
        <Tab eventKey="forth" title="Processed">
        <div className='row' style={{marginTop:'20px'}}>

<div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>Search</button></span></div>



</div>
<div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
<div className='col'><button style={Order}> Order Number</button></div>
<div className='col'><button style={Order}>Store Order Number</button></div>
<div className='col'><button style={Order}>Order Source</button></div>
<div className='col'><button style={Order}>Tracking Number</button></div>
<div className='col'><button style={Order}>Local Carrier Contact Info</button></div>
<div className='col'><button style={Order}>Resending Fee ($)</button></div>
<div className='col'><button style={Order}>Deadline</button></div>
<div className='col'><button style={Order}>Note</button></div>
<div className='col'><button style={Order}>Shipping Info</button></div>
<div className='col'><button style={Order}>Date Processed</button></div>



</div>
        </Tab>
        <Tab eventKey="fifth" title="Expired">
        <div className='row' style={{marginTop:'20px'}}>

            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>Search</button></span></div>
            
   

          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}> Order Number</button></div>
            <div className='col'><button style={Order}>Store Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Local Carrier Contact Info</button></div>
            <div className='col'><button style={Order}>Resending Fee ($)</button></div>
            <div className='col'><button style={Order}>Deadline</button></div>
            <div className='col'><button style={Order}>Note</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>



          </div>
        </Tab>
        <Tab eventKey="sixth" title="Completed">
        <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={inputbox} type="date" /></div>
            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>
            <div className='col'>
                <select  style={inputbox} name="All" id="">
                    <option value="">All</option>
                    <option value=""></option>
                </select>
                </div>
   
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Paid Time Dispatch time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
        </Tab>
        <Tab eventKey="seventh" title="Closed">
        <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={inputbox} type="date" /></div>
            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>
            <div className='col'>
                <select  style={inputbox} name="All" id="">
                    <option value="">All</option>
                    <option value=""></option>
                </select>
                </div>
   
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Paid Time Dispatch time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
        </Tab>
        <Tab eventKey="eighth" title="Abnormal Orders">
        <div><p>1. Additional information required to be filled in. Otherwise, delivery time will be affected.</p></div>
        <div><p>2. Once you fill in the additional information, order information will be updated and your orders will be dispatched soon!</p></div>
        <div className='row' style={{marginTop:'20px'}}>
          
            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>
           
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Paid Time</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Reasons</button></div>
            <div className='col'><button style={Order}>Actions</button></div>


          </div>
        </Tab>
      </Tabs>
    </div>
      </div>
      </div>
     
    </div>
  )
}

export default UndeleviredOrder
