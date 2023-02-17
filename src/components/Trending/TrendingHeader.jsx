import React from 'react'
import './TrendingHeader.css'
const header={
    justifyContent:'center',
    paddingTop:'20px',
    paddingBottom:'20px',
   

}
function TrendingHeader() {
  return (
    <div id="header" >
       <div  style={header}>
      <h3 align='center' >Trending Products</h3>
    </div>
    </div>
   
  )
}

export default TrendingHeader
