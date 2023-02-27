import React from 'react'

import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import './UndeleviredOrder.css'


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
       const skubntdate={
           width:'200px',
          height:'35px',
          borderColor:'transparent',
        
          borderRadius: '86px',
         
          backgroundColor:'rgba(231, 231, 231, 1)',
          color: 'rgba(50, 51, 58, 1)',
          fontSize: '15px',
          paddingLeft: '20px',
        
        
        
          outlineColor:'transparent', 
       }
       
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


         
        
  return (
    <div>
      <div>
        <Adminnavbar />
      </div>
      <div className='row'>
      <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
      <div className='col-10'>
    
      <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
      <div className='headingAll'><h2>Undelevired Order</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className='tablist' >
               <Tab  className='tabbtn'>Awaiting Payments</Tab>
                <Tab  className='tabbtn'>Paid</Tab>
                <Tab className='tabbtn'>Awaiting Pickup at local Post office</Tab>
                <Tab className='tabbtn'>Processed</Tab>
                <Tab className='tabbtn'>Expired</Tab>
                <Tab className='tabbtn'>Closed</Tab>
                <Tab className='tabbtn'>Abnormal Orders</Tab>
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
            <div className='row' style={{marginTop:'20px'}}>
            <div className='col-6'><input style={skubnt} type="text"  placeholder='please enter order number' /><span><button style={serchbtn}>Search</button></span></div>
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
            </Tab.Panel>
            <Tab.Panel>
            <div className='row' style={{marginTop:'20px'}}>
            
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>submit</button></span></div>
            

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
            </Tab.Panel>
            <Tab.Panel>
            <div className='row' style={{marginTop:'20px'}}>
            
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>submit</button></span><button style={Pickbtn}>Pickup Notification</button></div>
            

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
            </Tab.Panel>
            <Tab.Panel>
            <div className='row' style={{marginTop:'20px'}}>

                <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>Search</button></span></div>



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
            </Tab.Panel>
            <Tab.Panel>
            <div className='row' style={{marginTop:'20px'}}>

                <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /><span><button style={serchbtn}>Search</button></span></div>



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
            </Tab.Panel>
            <Tab.Panel>
            <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={skubntdate} type="date" /></div>
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            <div className='col'>
                <select  style={skubnt} name="All" id="">
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
            </Tab.Panel>
            <Tab.Panel>
            <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={skubntdate} type="date" /></div>
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            <div className='col'>
                <select  style={skubnt} name="All" id="">
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
            </Tab.Panel>
            <Tab.Panel>
            <div><p>1. Additional information required to be filled in. Otherwise, delivery time will be affected.</p></div>
        <div><p>2. Once you fill in the additional information, order information will be updated and your orders will be dispatched soon!</p></div>
        <div className='row' style={{marginTop:'20px'}}>
          
            <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
           
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
            </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div>
      </div>
    
      </div>
     
    </div>
  )
}

export default UndeleviredOrder
