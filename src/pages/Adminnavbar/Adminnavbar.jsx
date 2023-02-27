import React from 'react'
import './Adminnavbar.css'
import avatar from '../../assets/avatar.png'
import bell from '../../assets/bell.png'
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom'
function Adminnavbar() {
  const history=useHistory()
  const userId=localStorage.getItem("userId")
  return (
    <div className='container-fluid table-bordered' id="Admindashboard"  >
      <div className='row' style={{borderColor:"10px solid yellow;"}}>
      <div className='flex-container120' >
        <div className='flex-item-left120' style={{margin:'10px'}}> <img onClick={()=>{
          history.push("/")
        }} style={{width:"70px"}} src={logo} alt="" /> </div>
        <div className='flex-item-right120'> 
        <img src={avatar} alt="Avatar" class="avatar" style={{width:'30px'}}></img> <span style={{margin:'10px'}}>
        <div className="dropdownuser">
        <button className="dropbtnuser" >{userId}</button>
          <div className="dropdown-contentuser">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          </div>
        </div>
        </span><img  src={bell} alt="" />
   </div>
      </div>
      </div>
      
    </div>
  )
}

export default Adminnavbar
