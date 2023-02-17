import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

function SkuList() {
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
            width:'350px',
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
               <div className='col-2'></div><h4 style={{marginTop:'20px'}}>SkuList</h4> 
               <div className='col' ><button style={{float:'right',backgroundColor:'#FFE51A',borderColor:'transparent',borderRadius:'10px',padding:'5px',marginRight:'5px'}}>Add To Sku list</button></div>
            </div>
        <div className='row'>
            <div className='col'>
            <div>
            <div className='row' style={{marginTop:'25px'}}>
        <div className='col-4'><input style={inputbox} type="text" placeholder='Enter Sku/Product name' /></div>

        
        <div className='col-2'><p><button style={serchbtn}>Search</button></p></div>
      </div>
      <div className='row' style={{padding:'5px',marginTop:'20px',backgroundColor:'#FDE31A',}}>
        <div className='col'><button style={Order}>Product Information</button></div>
        <div className='col'><button style={Order}>	Inventry</button></div>

        <div className='col'><button style={Order}>Weight</button></div>
        <div className='col'><button style={Order}>Shipping From</button></div>
        <div className='col'><button style={Order}>Shipping Method</button></div>
        <div className='col'><button style={Order}>Price</button></div>
        <div className='col'><button style={Order}>Shipping Cost</button></div>
        <div className='col'><button style={Order}>Amount</button></div>
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

export default SkuList