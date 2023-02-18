import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

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

 const inputbox={
    outlineColor:'#FDE31A',
    width:'150px',
    innerHeight:'30px',
    borderColor:'#FDE31A'
 }

function OrderFullfillment() {
  return (
    <div>
      <div>
        <Adminnavbar />
      </div>
      <div className='row'>
      <div className='col-2'><Sidebar /></div>
      <div className='col-2'>
      <div style={{ display: 'block', width:'1140px',color:'black' }}>
      
      <Tabs defaultActiveKey="eighth" style={{backgroundColor:'rgba(255, 214, 0, 1)',color:'black',textDecoration:'none'}}>
        <Tab eventKey="first" title="All" >
          <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={inputbox} type="date" /></div>
            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>
            <div className='col'>
                <select  style={inputbox} name="Abnormal order" id="">
                    <option value="">Abnormal order</option>
                    <option value="">incomplete Order Information</option>
                </select>
                </div>
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
        </Tab>
        <Tab eventKey="second" title="Awaiting Payment">
        <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={inputbox} type="date" /></div>

            <div className='col'>
                <select  style={inputbox} name="Order Status" id="">
                    <option value="">Awaiting Payments</option>
                    <option value="">Waiting for receive</option>
                    <option value="">Waiting for pay again</option>
                </select>
                </div>
                <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>
                <div className='col'>
                <select  style={inputbox} name="Order Status" id="">
                    <option value="">Abnormal Orders</option>
                    <option value="">Incomplete Order information</option>
                   
                </select>
                </div>
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
          
           
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
        </Tab>
        <Tab eventKey="third" title="Pending">
        <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={inputbox} type="date" /></div>
            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>

            <div className='col'>
                <select  style={inputbox} name="Order Status" id="">
                    <option value="">All</option>
                    <option value="">Changeable or Refuldable Orders</option>
                    <option value="">Full Payment Orders </option>
                </select>
                </div>
                <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>
                <div className='col'>
                <select  style={inputbox} name="Order Status" id="">
                    <option value="">Abnormal Orders</option>
                    <option value="">Incomplete Order information</option>
                   
                </select>
                </div>
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
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
        <Tab eventKey="forth" title="Processing">
        <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={inputbox} type="date" /></div>
            <div className='col'><input style={inputbox} placeholder='please enter order number' type="text" /></div>
            <div className='col'>
                <select  style={inputbox} name="All" id="">
                    <option value="">All</option>
                    <option value=""></option>
                </select>
                </div>
            <div className='col'>
                <select  style={inputbox} name="Abnormal order" id="">
                    <option value="">Abnormal order</option>
                    <option value="">incomplete Order Information</option>
                </select>
                </div>
            <div className='col'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A'}}>
            <div className='col'><button style={Order}>Your Order Number</button></div>
            <div className='col'><button style={Order}>Cj Order Number</button></div>
            <div className='col'><button style={Order}>Order Source</button></div>
            <div className='col'><button style={Order}>Quantity</button></div>
            <div className='col'><button style={Order}>Paid Time</button></div>
            <div className='col'><button style={Order}>Status</button></div>
            <div className='col'><button style={Order}>Shipping Info</button></div>
            <div className='col'><button style={Order}>Shipping Method</button></div>
            <div className='col'><button style={Order}>Tracking Number</button></div>
            <div className='col'><button style={Order}>Amount</button></div>
            <div className='col'><button style={Order}>Action</button></div>


          </div>
        </Tab>
        <Tab eventKey="fifth" title="Dispatched">
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

export default OrderFullfillment
