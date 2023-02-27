import React, { useState } from 'react';


import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import Trending from '../../components/Trending/Trending'
import downarrow from '../../assets/downarrow.png'
import './ProductListing.css'


function ProductListing() {
const [category, setCategory] = useState("");
const [products, setProduct] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div>
      <Navbar />
      <br />
      <Shopnavbar />
   <br />
      
      <div className="container-fluid">
        <div className="container" style={{margin:'20px'}}>
        <div className="row" style={{margin:'20px'}}>
                <div className="col-2"><h4>You are in:</h4></div>

                <div className="col"><select className="buttonstyle"  name="" id="">
                  <option value=""><h4>All Catogries</h4></option>
                  <option value=""></option>
                  </select>

                  </div>
               
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col-2"><h4>Filter by:</h4></div>

                <div className="col"><select className="buttonstyle"  name="" id="">
                  <option value="">All Warehouses</option>
                  <option value=""></option>
                  </select>

                  </div>
                <div className="col"><button className="buttonstylePrice">Price :<input style={{width:'50px',borderColor:'transparent',borderRadius:"20px"}} placeholder='Min' type="number" name="" id="" /> - <input style={{width:'50px',borderColor:'transparent',borderRadius:"20px",outline:'transparent'}} placeholder='Max' type="number" name="" id="" /> </button></div>
                <div className="col"><select className="buttonstyle"  name="" id="">
                  <option value="">Conferm</option>
                  <option value=""></option>
                  </select>

                  </div>
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col-2"><h4>Sort by:</h4></div>
                <div className="col"><button className="buttonstyle">Best Match</button></div>
                <div className="col"><input placeholder='list'  className='inputboxbtn' type="number" /></div>
                <div className="col"><input className='inputboxbtn'  style={{color:'black'}} placeholder='price' type="number" /></div>
                
                
                <div className="col"><button className="buttonstyle">Newest</button></div>
            </div>
        </div>
      </div>
      <Trending products={products} />
      
    </div>
   
  )
}

export default ProductListing

