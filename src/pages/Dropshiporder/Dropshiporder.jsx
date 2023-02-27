import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
function Dropshiporder() {

    const stybtn={
        backgroundColor:'#FFE51A',
        borderColor:'transparent',
        padding:'5px',
        width:'100px',
        fontWeight:'400',
        fontColor:'black',
        borderRadius:'10px'
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
  return (
    <div>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2'  style={{backgroundColor:'#31343A'}}><Sidebar /></div>
            <div className='col-10'>
             <div className='container' style={{ display: 'block',color:'black',borderRadius:'20px', border:"0.5px solid rgba(0, 0, 0, 0.25)" ,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',margin:'5px'}}>
                <div className='Dashboardheading'><h3>Dropship Orders</h3></div>
             <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                        <select name="" id="" style={skubnt}>
                            <option value="">Your Order Time</option>
                            
                        </select>
                    </div>
                    <div className='col-4'><p><input style={skubnt} type="date" /></p></div>
                </div>
                <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                    <select name="" id="" style={skubnt}>
                            <option value="">Your Shipping method</option>
                    </select>
                    </div>
                    <div className='col-4'>
                        <input style={skubnt} placeholder='please enter the name' type="text" />
                    </div>
                </div>
                <div className='row' style={{marginTop:'20px'}} >
                    <div className='col-4'>
                        <input style={skubnt} placeholder='plaese enter product title' type="text" />
                    </div>
                    <div className='col-4'><input style={skubnt} placeholder='please enter tracking id' type="text" /></div>
                </div>
                <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                        <input style={skubnt} placeholder='please enter order number' type="text" />
                    </div>
                    <div className='col-4'>
                        <input style={skubnt} placeholder='Abnormal Order' type="text" />
                    </div>
                    <div className='col-2'>
                        <button style={stybtn}>Search</button>
                    </div>
                    <div className='col-2'>
                        <button style={stybtn}>clear</button>
                    </div>
                </div>
                <div className='row' style={{backgroundColor:'#FFE627',padding:'5px',marginTop:'20px'}}>
                    <div className='col'><p>Your Order number<span><select name="" id=""  style={{width:'20px'}}>
                        <option value="all">All</option>
                        <option value="">Store</option>
                        <option value="">Excel imported</option>
                        <option value="">Created</option>
                        <option value="">Suplier</option>
                        
                        </select></span></p>
                    </div>
                    <div className='col'>
                        <button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Your order Time</button>
                    </div>
                    
                    <div className='col'>
                       
                        <p>Shipping method:<span><select name="" id="" style={{width:'20px'}}>
                            <option value="">With Shipping Method</option>
                            <option value="">Without Shipping Method</option>
                        </select></span></p>
                        
                    </div>
                     <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >Cost</button></div>   
                    <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >Remark</button></div>
                    
                    <div className='col'><button style={{backgroundColor:'transparent',borderColor:'transparent'}} >action</button></div>
                </div>
             </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dropshiporder
