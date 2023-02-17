import React from 'react';
import shipping from '../../assets/shipping.png';
import track from '../../assets/track.png'
import './Shipping.css'
const container={
    position: 'relative',
    fontFamily: 'Poppins',
    paddingTop:'100px' 
}
const textBlock={
    position: 'absolute',
    bottom: '250px',
    right: '200px',
    backgroundColor:'transparent',
    color:'black',
    paddingLeft:'20px',
    paddingRight: '20px',
}
 const textBlock_second={
    position: 'absolute',
    bottom: '180px',
    right: '200px',
    backgroundColor: 'transparent',
    color:'black',
    paddingLeft: '20px',
    paddingRight: '20px',
   
   
 }
 const buttondiv={
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'left',
    background: 'rgba(231, 231, 231, 1)',
    borderRadius: '20px',
    borderWidth: '0',
    height:'40px',
    paddingLeft: '20px',

 }
 const buttoncss={
    position: 'absolute',
    top: '0',
    borderRadius: '5px',
    right: '0px',
    zIndex: '1',
    border: 'none',
    top: '2px',
    height: '50px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#FFD600',
    transform: 'translateX(2px)',
    fontFamily: 'Poppins',
    fontWeight: '400px',
    fontSize: '18px',
    lineHeight: '27px',
    width: '160px',
    borderTopLeftRadius: '15px',
     borderBottomLeftRadius: '15px',
      fontweight: '400',
    fontsize: '18px',
  
 }

function Shipping() {
  return (
    <div id="shippingcontainer">
    <div  className="container-fluid" style={container}>
        <img    src={shipping} alt="Nature" style={{width: '100%'}} />
        <div   className="text-block" style={textBlock}>
          <h3 data-aos="fade-left" data-aos-duration="3000" style={{paddingBottom:'20px'}}>You sell-We source and ship for you!</h3>
          <h5 data-aos-duration="3000" style={{paddingBottom:'20px'}}>We will source for you with lower price and higher quality.</h5>
          <div className="buttonIn">
            <input id="divbutton" type="text" placeholder="please enter the tracking number" />
            <span><button className='buttoncss' style={buttoncss}>Track Pakage</button></span>
          </div>
        </div>
        <div className="input-group" style={{display:'flex'}}>
        <div className="text-block-2" style={textBlock_second}>
          <input style={buttondiv} src="text" placeholder="Shipping Cost and Time" />
          <span ><img src={track} style={{width:'auto',height:'auto',padding:'10px',backgroundColor:'rgba(255, 214, 0, 1)',borderRadius:'20px',borderColor:'transparent',}} /></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Shipping
