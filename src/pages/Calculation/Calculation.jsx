import React,{ useState, useEffect } from 'react';
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar';


function Calculation() {

    const inputbox={
        width:'300px',
        outline:'#FFD600',
        borderColor:'#FFD600',
        height:'30px',
        color:'black',
        marginLeft:'30px'

    }

    const inputboxthird={
        width:'300px',
        outline:'#FFD600',
        borderColor:'#FFD600',
        height:'30px',
        color:'black',
        marginRight:'200px'  
    }
    const inputboxforth={
        width:'300px',
        outline:'#FFD600',
        borderColor:'#FFD600',
        height:'30px',
        color:'black',
         
    }
    const  inputboxfifth={
        width:'300px',
        outline:'#FFD600',
        borderColor:'#FFD600',
        height:'30px',
        color:'black',
        marginRight:'100px'  
    }
    const calbtn={
       marginTop:'40px',
       marginLeft:'40px',
       backgroundColor:'#FFD600',
       borderColor:'transparent',
       width:'200px',
       height:'50px',
       borderRadius:'20px',
       marginBottom:'40px'
    }

  return (
    <div>
      <Navbar />
      <br />
      <Shopnavbar />
      <br />
       <h4 style={{marginLeft:'50px',marginTop:'20px',marginBottom:'40px'}}>Shipping Cost Calculation </h4>
       <form action="">
        <div className='row'>
            <div className='col-1' style={{marginLeft:'50px'}} >Plateform:</div>
            <div className='col-1' >
            <select style={inputbox} name="" id="">
            <option value="">Please select</option>
            </select>
            </div>
        </div>
        <div className='row' style={{marginTop:'20px'}}>
            <div className='col' style={{marginLeft:'50px'}}>Shipping From</div>
            <div className='col'>
            <select style={inputboxforth} name="" id="">
            <option value="">Plaese select</option>
            </select>
            </div>
            <div className='col' style={{marginLeft:'200px'}}>Shipping To</div> 
            <div className='col'>
            <select style={inputboxthird} name="" id="">
            <option value="">Plaese select</option>
            </select>
            </div>
          
            
        </div>
        <div className='row' style={{marginTop:'20px'}}>
        <div className='col-1' style={{marginLeft:'50px'}}>Postcode</div>
            <div className='col-1'>
            <input  style={inputboxfifth} type="text" />
            </div>
            <div className='col-2' style={{marginLeft:'450px'}}>Size:</div> 
            <div className='col-2'><input type="text" />

            </div>
            
           
        </div>
        <div className='row' style={{marginTop:'20px'}}>
            <div className='col-1' style={{marginLeft:'50px',marginBottom:'40px'}}>Weight</div>
            <div className='col-1'>
            <input  style={inputbox} type="number" />
            </div>
           
        </div>
        <div align="center" className='row'>
            <div className='col-2'><span><input type="checkbox" /></span>Ordinary</div>
            <div className='col-2'><span><input type="checkbox" /></span>Electronic</div>
            <div className='col-2'><span><input type="checkbox" /></span>Battery contains</div>
            <div className='col-2'><span><input type="checkbox" /></span>Pure Battery</div>
            <div className='col-2'><span><input type="checkbox" /></span>Liquid Contains</div>
            <div className='col-2'><span><input type="checkbox" /></span>Powder</div>
            <div className='col-2'><span><input type="checkbox" /></span>Cream</div>
            <div className='col-2'><span><input type="checkbox" /></span>Magnetic Contains</div>
            <div className='col-2'><span><input type="checkbox" /></span>Sharp</div>
            <div className='col-2'><span><input type="checkbox" /></span>Custom Ban</div>
            <div className='col-2'><span><input type="checkbox" /></span>Imitation Brand</div>
            <div className='col-2'><span><input type="checkbox" /></span>Oversize</div>

       </div>
       <div align="center" className='row'>
            <div className='col-2'><span><input type="checkbox" /></span>Thin</div>
            <div className='col-2'><span><input type="checkbox" /></span>flat</div>
            <div className='col-2'><span><input type="checkbox" /></span>other</div>
        </div>
        </form>
        <div ><button style={calbtn}>Calculate</button></div>
       </div>
     
    

  )
}

export default Calculation
