import React, { useEffect } from 'react'
import Adminnavbar from './Adminnavbar/Adminnavbar'
import Sidebar from './Sidebar/Sidebar'
import pad from '.././assets/pad.png'
import parcel from '.././assets/parcel.png'
import timer from '.././assets/timer.png'
import order from '.././assets/order.png'
import credit from '.././assets/credit.png'
import avatar from '.././assets/avatar.png'
import { useHistory } from 'react-router-dom'

function MyCj() {

  const btn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    borderColor:'transparent',
    width:'100px',
    padding:'5px',
    borderRadius:'20px'
  }

  const inventbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    borderColor:'transparent',
    width:'170px',
    padding:'5px',
    borderRadius:'20px' ,
    marginTop:'20px'
  }
  const amountbtn={
    backgroundColor:'rgba(253, 227, 26, 1)',
    borderColor:'transparent',
    width:'170px',
    padding:'5px',
    borderRadius:'20px' ,
   
  }

  const history=useHistory()
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      history.push("/MyCj");
     
    } else {
      history.push("/signin");
    }
  }, []);
  return (
    <div>
      <Adminnavbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <div align="center" className='row' style={{paddingTop:'40px'}}>
              <div className='col'><span><img src={avatar} style={{width:'50px'}} alt="" /><h6>Name</h6></span></div>
              <div className='col'> <button style={btn}>Points</button> </div>
              <div className='col'> <button style={btn}> Wallet</button></div>
              <div className='col'> <button style={amountbtn}>Sales Amount:$42</button> </div>
            </div>
            <div align="center" className='row' style={{paddingTop:'40px'}}>
              <div className='col'>
                <div><img src={pad} alt="" /></div>
                <div><button style={inventbtn} >Inventory Alert : 0</button></div>
              </div>
              <div className='col'>
              <div><img src={parcel} alt="" /> </div>
              <div><button style={inventbtn}>Sourced Products: 0</button></div>
              </div>
              <div className='col'>
              <div><img src={timer} alt="" /></div>
              <div> <button style={inventbtn}>Pending Payment : 0</button> </div>
              </div>
              <div className='col'>
              <div><img src={order} alt="" /></div>
              <div> <button style={inventbtn}>Pending Cj Orders : 0</button> </div>
              </div>
              <div className='col'>
              <div><img src={credit} alt="" /></div>
              <div>
                <button style={inventbtn}>Coupan & Cards : 0</button>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
   
    </div>
  )
}

export default MyCj

