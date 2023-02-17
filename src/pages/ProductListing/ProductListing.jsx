import React, { useState } from 'react';


import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import Trending from '../../components/Trending/Trending'
import downarrow from '../../assets/downarrow.png'


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
                <div className="col">You are in: <span style={{marginLeft:'130px'}}><button className="buttonstyle" style={{marginRight:'100px'}}>All Category <span><img src={downarrow} alt="" /></span></button></span></div>
                
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col">Filter by:</div>
                <div className="col"><button className="buttonstyle">All Warehouse<span><img src={downarrow} alt="" /></span></button></div>
                <div className="col"><button className="buttonstyle">All Types <span><img src={downarrow} alt="" /></span></button></div>
                <div className="col"><button className="buttonstyle2">Price<input style={{width:'50px',borderColor:'transparent',borderRadius:"20px"}} placeholder='Min' type="text" name="" id="" /> - <input style={{width:'50px',borderColor:'transparent',borderRadius:"20px"}} placeholder='Max' type="text" name="" id="" /> <span><img src={downarrow} alt="" /></span></button></div>
                <div className="col"><button className="buttonstyle">Conferm <span><img src={downarrow} alt="" /></span></button></div>
            </div>
            <div className="row" style={{margin:'20px'}}>
                <div className="col">Best Match</div>
                <div className="col"><button className="buttonstyle">List</button></div>
                <div className="col"><button className="buttonstyle">Price</button></div>
                <div className="col"><button className="buttonstyle">Newest</button></div>
                <div className="col"><button className="buttonstyle2">Free shipping</button></div>
            </div>
        </div>
      </div>
      <Trending products={products} />
      
    </div>
   
  )
}

export default ProductListing

