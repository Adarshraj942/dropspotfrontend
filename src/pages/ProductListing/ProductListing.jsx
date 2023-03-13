import React, { useState } from 'react';


import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import Trending from '../../components/Trending/Trending'
import downarrow from '../../assets/downarrow.png'
import Footer from '../../components/Footer/Footer'
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
      
      <div className="container" style={{  border: "0.5px solid rgba(0, 0, 0, 0.25)",boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.15)',borderRadius:'27px'}}>
        <div className="container" style={{margin:'20px',}}>
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
                <div className="col"><button className="buttonstylePrice">Price : <input style={{width:'70px',borderColor:'transparent',borderRadius:"20px",outline:'transparent'}} placeholder='Min' type="number" name="" id="" /> - <input style={{width:'70px',borderColor:'transparent',borderRadius:"20px",outline:'transparent',outline:'transparent'}} placeholder='Max' type="number" name="" id="" /> </button></div>
                <div className="col"><select className="buttonstyle"  name="" id="">
                  <option value="">Conferm</option>
                  <option value=""></option>
                  </select>

                  </div>
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col-2"><h4>Sort by:</h4></div>
                <div className="col"><button className="buttonstyle">Best Match</button></div>
                <div className="col"><input placeholder='list' className='inputfieldtext'  type="number" /></div>
                <div className="col"><input   className='inputfieldtext'   style={{color:'black'}} placeholder='price' type="number" /></div>
                
                
                <div className="col"><button className="buttonstyle">Newest</button></div>
            </div>
        </div>
      </div>
      <br />
      <br />
      <Trending products={products} />
      <br />
      <br />
      <Footer />
      
    </div>
   
  )
}

export default ProductListing

