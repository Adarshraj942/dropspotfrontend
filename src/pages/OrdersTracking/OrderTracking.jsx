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
            fontSize:'12px',
           
          
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
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
            <div className='row'>
                <div className='col'>
                <div>
                <div className='row' style={{marginTop:'20px'}}>
            <div className='col-2'><input style={inputbox} type="date" /></div>

            
            <div className='col-2'><p><button style={serchbtn}>Search</button><span><button style={Clearbtn} >Clear</button></span></p></div>
          </div>
          <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',}}>
            <div className='col'><button style={Order}>	Date</button></div>
            <div className='col'><button style={Order}>	Order</button></div>
            <div className='col'><button style={Order}>Shipping<br /> Label Quantity</button></div>
            <div className='col'><button style={Order}>Dispatched <br /> (Normal/Abnormal)</button></div>
            <div className='col'><button style={Order}>En Route <br />(Normal/Abnormal)Shipping Method</button></div>
            <div className='col'><button style={Order}>Arrived <br />(Normal/Abnormal)</button></div>
            <div className='col'><button style={Order}>Out for <br /> Delivery(Normal/Abnormal)</button></div>
            <div className='col'><button style={Order}>Available for Pickup<br />(Normal/Abnormal)</button></div>
            <div className='col'><button style={Order}>Delivered</button></div>
            <div className='col'><button style={Order}>Action</button></div>


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