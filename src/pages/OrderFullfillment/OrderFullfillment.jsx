import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react'

 const serchbtn={
backgroundColor:'#FDE31A',
borderColor:'transparent',
borderRadius:'10px',

padding:'5px',
outlineColor:'#FDE31A'


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

 const skubnt={
  width:'150px',
  height:'35px',
  borderColor:'transparent',

  borderRadius: '86px',
 
  backgroundColor:'rgba(231, 231, 231, 1)',
  color: 'rgba(50, 51, 58, 1)',
  fontSize: '15px',
  paddingLeft: '20px',
  outlineColor:'transparent', 
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
function OrderFullfillment() {
  return (
    <div>
      <div>
        <Adminnavbar />
      </div>
      <div className='row'>
      <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
      <div className='col-10'>
     
      <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
      <div className='headingAll'><h2>Order Fullfillment</h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className='tablist' >
                
                <Tab  className="tabbtn">All</Tab>
                <Tab className="tabbtn">
                Awaiting Payments
                </Tab>
                <Tab className="tabbtn">Pending</Tab>
                <Tab className="tabbtn">Processing</Tab>
                <Tab className="tabbtn">Dispatched</Tab>
                <Tab className="tabbtn">Completed</Tab>
                <Tab className="tabbtn">Closed</Tab>
                <Tab className="tabbtn">Abnormal Orders</Tab>
      </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel> <div className='continer' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px' }}>
        
         <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px' }}>
         <div className='Dashboardheading'><h3>All</h3></div>
            <div className='row' style={{marginTop:'20px'}}>
              <div className='col'><input style={skubnt} type="date" /></div>
              <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
              <div className='col'>
                  <select  style={skubnt} name="Abnormal order" id="">
                      <option value="">Abnormal order</option>
                      <option value="">incomplete Order Information</option>
                  </select>
                  </div>
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'20px'}}>
                  <div className='col'><button style={Order}>Your Order Number</button></div>
                  <div className='col'><button style={Order}>Cj Order Number</button></div>
                  <div className='col'><button style={Order}>Status</button></div>
                  <div className='col'><button style={Order}>Quantity</button></div>
                  <div className='col'><button style={Order}>Shipping Method</button></div>
                  <div className='col'><button style={Order}>Tracking Number</button></div>
                  <div className='col'><button style={Order}>Amount</button></div>
                  <div className='col'><button style={Order}>Action</button></div>


                </div>
            </div>

              
           </div>
           </Tab.Panel>
            <Tab.Panel>
            <div className='container'  style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px' }}>
            <div className='Dashboardheading'><h3>Awaiting Payments</h3></div>
            <div className='row' style={{marginTop:'20px'}}>
              <div className='col'><input style={skubnt} type="date" /></div>

              <div className='col'>
                  <select  style={skubnt} name="Order Status" id="">
                      <option value="">Awaiting Payments</option>
                      <option value="">Waiting for receive</option>
                      <option value="">Waiting for pay again</option>
                  </select>
                  </div>
                  <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
                  <div className='col'>
                  <select  style={skubnt} name="Order Status" id="">
                      <option value="">Abnormal Orders</option>
                      <option value="">Incomplete Order information</option>
                    
                  </select>
                  </div>
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px'}}>
              <div className='col'><button style={Order}>Your Order Number</button></div>
              <div className='col'><button style={Order}>Cj Order Number</button></div>
              <div className='col'><button style={Order}>Status</button></div>
              <div className='col'><button style={Order}>Quantity</button></div>
            
            
              <div className='col'><button style={Order}>Amount</button></div>
              <div className='col'><button style={Order}>Action</button></div>


            </div>
            </div> 
            </Tab.Panel>
            <Tab.Panel>
            <div className='container'  style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}}>
            <div className='Dashboardheading'><h3>Pending</h3></div>
         <div className='row' style={{marginTop:'20px'}}>
              <div className='col'><input style={skubnt} type="date" /></div>
              <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>

              <div className='col'>
                  <select  style={skubnt} name="Order Status" id="">
                      <option value="">All</option>
                      <option value="">Changeable or Refuldable Orders</option>
                      <option value="">Full Payment Orders </option>
                  </select>
                  </div>
                  <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
                  <div className='col'>
                  <select  style={skubnt} name="Order Status" id="">
                      <option value="">Abnormal Orders</option>
                      <option value="">Incomplete Order information</option>
                    
                  </select>
                  </div>
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'10px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px'}}>
              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Cj Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Order Source</button></div>
              
              <div className='col-md-auto'><button style={Order}>Quantity</button></div>
            
            
              <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
              <div className='col-md-auto'><button style={Order}>Status</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
              <div className='col-md-auto'><button style={Order}>Tracking Number </button></div>
              <div className='col-md-auto'><button style={Order}>Amount</button></div>
              <div className='col-md-auto'><button style={Order}>Action</button></div>


            </div>
         </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px'}}>
            <div className='Dashboardheading'><h3>Processing</h3></div>
          <div className='row' style={{marginTop:'20px'}}>
              <div className='col'><input style={skubnt} type="date" /></div>
              <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
              <div className='col'>
                  <select  style={skubnt} name="All" id="">
                      <option value="">All</option>
                      <option value=""></option>
                  </select>
                  </div>
              <div className='col'>
                  <select  style={skubnt} name="Abnormal order" id="">
                      <option value="">Abnormal order</option>
                      <option value="">incomplete Order Information</option>
                  </select>
                  </div>
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px'}}>
              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Cj Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Order Source</button></div>
              <div className='col-md-auto'><button style={Order}>Quantity</button></div>
              <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
              <div className='col-md-auto'><button style={Order}>Status</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
              <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
              <div className='col-md-auto'><button style={Order}>Amount</button></div>
              <div className='col-md-auto'><button style={Order}>Action</button></div>
           </div>
          </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container'>
            <div className='Dashboardheading'><h3>Dispatched</h3></div>
         <div className='row' style={{marginTop:'20px'}}>
              <div className='col'><input style={skubnt} type="date" /></div>
              <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
              <div className='col'>
                  <select  style={skubnt} name="All" id="">
                      <option value="">All</option>
                      <option value=""></option>
                  </select>
                  </div>
    
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px'}}>
              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Cj Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Order Source</button></div>
              <div className='col-md-auto'><button style={Order}>Quantity</button></div>
              <div className='col-md-auto'><button style={Order}>Paid Time Dispatch time</button></div>
              <div className='col-md-auto'><button style={Order}>Status</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
              <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
              <div className='col-md-auto'><button style={Order}>Amount</button></div>
              <div className='col-md-auto'><button style={Order}>Action</button></div>


            </div>
         </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='Dashboardheading'><h3>Completed</h3></div>
            <div className='row' >
              <div className='col'><input style={skubnt} type="date" /></div>
              <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
              <div className='col'>
                  <select  style={skubnt} name="All" id="">
                      <option value="">All</option>
                      <option value=""></option>
                  </select>
                  </div>
    
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px'}}>
              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Cj Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Order Source</button></div>
              <div className='col-md-auto'><button style={Order}>Quantity</button></div>
              <div className='col-md-auto'><button style={Order}>Paid Time Dispatch time</button></div>
              <div className='col-md-auto'><button style={Order}>Status</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
              <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
              <div className='col-md-auto'><button style={Order}>Amount</button></div>
              <div className='col-md-auto'><button style={Order}>Action</button></div>


            </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='Dashboardheading'><h3>Closed</h3></div>
            <div className='row' style={{marginTop:'20px'}}>
              <div className='col'><input style={skubnt} type="date" /></div>
              <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
              <div className='col'>
                  <select  style={skubnt} name="All" id="">
                      <option value="">All</option>
                      <option value=""></option>
                  </select>
                  </div>
    
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px'}}>
              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Cj Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Order Source</button></div>
              <div className='col-md-auto'><button style={Order}>Quantity</button></div>
              <div className='col-md-auto'><button style={Order}>Paid Time Dispatch time</button></div>
              <div className='col-md-auto'><button style={Order}>Status</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Info</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
              <div className='col-md-auto'><button style={Order}>Tracking Number</button></div>
              <div className='col-md-auto'><button style={Order}>Amount</button></div>
              <div className='col-md-auto'><button style={Order}>Action</button></div>


            </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='Dashboardheading'><h3>Abnormal Orders</h3></div>
            <div><p>1. Additional information required to be filled in. Otherwise, delivery time will be affected.</p></div>
          <div><p>2. Once you fill in the additional information, order information will be updated and your orders will be dispatched soon!</p></div>
          <div className='row' style={{marginTop:'20px'}}>
            
              <div className='col'><input style={skubnt} placeholder='please enter order number' type="text" /></div>
            
              <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
            </div>
            <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px'}}>
              <div className='col-md-auto'><button style={Order}>Your Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Cj Order Number</button></div>
              <div className='col-md-auto'><button style={Order}>Order Source</button></div>
              <div className='col-md-auto'><button style={Order}>Quantity</button></div>
              <div className='col-md-auto'><button style={Order}>Amount</button></div>
              <div className='col-md-auto'><button style={Order}>Paid Time</button></div>
              <div className='col-md-auto'><button style={Order}>Shipping Method</button></div>
              <div className='col-md-auto'><button style={Order}>Reasons</button></div>
              <div className='col-md-auto'><button style={Order}>Actions</button></div>


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

export default OrderFullfillment
