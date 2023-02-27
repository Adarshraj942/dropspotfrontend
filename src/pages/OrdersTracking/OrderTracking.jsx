import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

function OrderTracking() {
    const serchbtn={
        backgroundColor:'#FDE31A',
        borderColor:'transparent',
        borderRadius:'10px',
        
        padding:'5px',
        outlineColor:'#FDE31A'
        
        
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
  return (
    <div>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2'  style={{backgroundColor:'#31343A'}}>
                <Sidebar />
            </div>
            <div className='col-10'>
          

           <div className='container' style={{ display: 'block',color:'black',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'30px',padding:'40px',width:'1600px',overflowX:'scroll',marginRight:'30px' }}>
            <div><h2>Order Tracking</h2></div>
           <div className='row'>
                <div className='col'>
                <div>
                <div className='row' style={{marginTop:'20px'}}>
            <div className='col-4'><input style={skubnt} type="date" /></div>

            
            <div className='col-2'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',borderRadius:'20px',width:'1700px'}}>
            <div className='col-md-auto'><button style={Order}>	Date</button></div>
            <div className='col-md-auto'><button style={Order}>	Order</button></div>
            <div className='col-md-auto'><button style={Order}>Shipping<br /> Label Quantity</button></div>
            <div className='col-md-auto'><button style={Order}>Dispatched <br /> (Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>En Route <br />(Normal/Abnormal)Shipping Method</button></div>
            <div className='col-md-auto'><button style={Order}>Arrived <br />(Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>Out for <br /> Delivery(Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>Available for Pickup<br />(Normal/Abnormal)</button></div>
            <div className='col-md-auto'><button style={Order}>Delivered</button></div>
            <div className='col-md-auto'><button style={Order}>Action</button></div>


          </div>
                </div>
                
                </div>
            </div>
           </div>
            </div>
        </div>
      </div>
  )
}

export default OrderTracking