import React from 'react'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'

function UserProfile() {
const inputbox={
    backgroundColor:'#EFEFEF',
    borderRadius:'50px',
    height:'50px',
  outline:'#EFEFEF',
  borderColor:'transparent',
  width:'230px',
  textAlign:'center'
}
  return (
    <div>
     <Navbar />
     <br />
     <Shopnavbar />
     <br />
     <div className='container'>
       
      <div className='row-mt-2' style={{marginTop:'20px'}}>
        <div className='col-md-4'><label htmlFor="">First name: </label><input style={inputbox} placeholder='first name' type="text" /></div>
        <div className='col-md-4'><label htmlFor="">Last name: </label><input  style={inputbox} placeholder='Last name' type="text" /></div>
        <div className='col-md-4'><label htmlFor="">Email: </label><input  style={inputbox} placeholder='Enter email' type="text" /></div>
      </div>
      <div className='row-mt-2' style={{marginTop:'100px'}}>
        <div className='col-md-4'><label htmlFor="">Mobile: </label><input   style={inputbox} placeholder='Enter your Mobile' type="text" /></div>
        <div className='col-md-4'><label htmlFor="">Country: </label><input  style={inputbox} placeholder='Enter your Country' type="text" /></div>

      </div>
      <div className='row'>
      <div className='col'><label htmlFor="">Adress: </label><input  style={inputbox}  type="text" /></div>
      </div>

     </div>
    </div>
  )
}

export default UserProfile
