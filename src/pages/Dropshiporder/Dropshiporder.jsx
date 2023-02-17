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
  return (
    <div>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2'><Sidebar /></div>
            <div className='col-10'>
                <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                        <select name="" id="" style={{width:'300px',outline:'#FFE51A',borderColor:'#FFE51A'}}>
                            <option value="">Your Order Time</option>
                            
                        </select>
                    </div>
                    <div className='col-4'><p><input style={{width:'120px',outline:'#FFE51A',borderColor:'#FFE51A'}} type="date" /><span><input style={{width:'120px',outline:'#FFE51A',borderColor:'#FFE51A'}} type="date" /></span></p></div>
                </div>
                <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                    <select name="" id="" style={{width:'300px',outline:'#FFE51A',borderColor:'#FFE51A'}}>
                            <option value="">Your Shipping method</option>
                    </select>
                    </div>
                    <div className='col-4'>
                        <input style={{width:'300px',outline:'#FFE51A',borderColor:'#FFE51A'}} placeholder='please enter the name' type="text" />
                    </div>
                </div>
                <div className='row' style={{marginTop:'20px'}} >
                    <div className='col-4'>
                        <input style={{width:'300px',outline:'#FFE51A',borderColor:'#FFE51A'}} placeholder='plaese enter product title' type="text" />
                    </div>
                    <div className='col-4'><input style={{width:'300px',outline:'#FFE51A',borderColor:'#FFE51A'}} placeholder='please enter tracking id' type="text" /></div>
                </div>
                <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-4'>
                        <input style={{width:'300px',outline:'#FFE51A',borderColor:'#FFE51A'}} placeholder='please enter order number' type="text" />
                    </div>
                    <div className='col-4'>
                        <input style={{width:'300px',outline:'#FFE51A',borderColor:'#FFE51A'}} placeholder='Abnormal Order' type="text" />
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
  )
}

export default Dropshiporder
