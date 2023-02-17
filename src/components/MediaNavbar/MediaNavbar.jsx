import React from 'react'
import './MediaNavbar.css'

function MediaNavbar() {
  return (
    <div id="medianavbar" >
      <div class="topnav" id="myTopnav" style={{display:'flex'}}>
      <a href="#home" class="active">Language</a>
      <a href="#form" id='mediainput'>
        <form style={{width:'auto',position:'relative'}}  className='formserach' action="">
          <input type="search" placeholder='Search' />
          <button type='submit'></button>
        </form>
      </a>
 
     
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
   </div>
    </div>
  )
}

export default MediaNavbar
