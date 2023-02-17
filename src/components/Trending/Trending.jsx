import React, { useState } from "react";
import "./Trending.css";
import { useHistory } from "react-router-dom";
import shopingcard from "../../assets/shopingcard.png";
import { useLocation } from "react-router-dom";
import connection from "../../assets/connection.png";
import list from "../../assets/list.png";
import { useEffect } from "react";
import { getAllProducts } from "../../Api/ProductRequest.js";
import { addToWishlist, getWishlist } from "../../Api/WishlistRoute";

import swal from "sweetalert";

const btn_two = {
  backgroundColor: "rgba(255, 214, 0, 1)",
  
  color: "black",
  width: "70px",
  borderRadius: "20px",
  marginTop: "20px",
  fontFamily: "poppins",
  marginright:'2px',
  float:'left',
  border: '0.5px solid #FDE31A'
};

const btn_third = {
  backgroundColor: "rgba(255, 214, 0, 1)",

  color: "black",
  width: "100px",
  borderRadius: "20px",
  marginTop: "20px",
  marginLeft: "5px",
  fontFamily: "poppins",
  float:'right',
  border: '0.5px solid #FDE31A'

 
};
const list_second = {
  color: "rgba(165, 165, 165, 1)",
  fontstyle: "Poppins",
  fontWeight: "500",
  fontSize: "17.82px",
  lineHeigt: "22.23px",
  paddingLeft: "15px",
  fontFamily: "poppins",

 

};
const carddesign = {
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
 height:'330px',
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
};

function Trending() {
  const history = useHistory();
  const [products,setProduct]=useState([])
  const Productpage = () => {
      history.push(`/ProductPage/${products._id}`)
  } 

  const userData =localStorage.getItem("userId")
 const userInfo =localStorage.getItem("userInfo")
  // useEffect(async()=>{
  //   const fetchProducts=async()=>{
  //     const {data}=await getAllProducts()
  //     setProduct(data)
      
  //   }
  //   fetchProducts()
  // },[])

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const {data}=await getAllProducts()
      setProduct(data)
      
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state


  const wishlist=async(data)=>{
   if(userData && userInfo){
    const ata={
      productId:data,
      userId:userData,
      quantity:1
    }
    const tata= await addToWishlist(ata)
    if(tata){
     swal("Added to wishlist")
     
    }
   }else{
    swal("Login first")
    history.push('/signin')
   }
   
     
  }

    
  const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);

useEffect(() => {
  async function fetchData() {
    // You can await here
    const beta={userId:userData}
    const {data}=await getWishlist(beta)
    setUsers(data)
    setFilteredUsers(data.Wishlist.products)
    console.log(userData);
    console.log(data.Wishlist.products);
    // ...
  }
  fetchData();
}, []);
const [toggle,setToggle]=useState(false)
const handleToggle=()=>{
  setToggle(!toggle)
}
  return (
    <>
   <div id="trendingcontainer" className="conatiner-fluid">
    <div className="col-md-16" style={{width:'90%',margin:'5px',marginLeft:'3%'}}>
    <div className="row">
          {products &&
            products.length > 0 &&
            products.map((ele) => (
              <div className="col"  >
                <div align="center" className="card" style={carddesign}>
                  <div className="image-container">
                    <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                        {/* <i class= "fa fa-heart"></i>
                        <i class= " fa fa-heart-o"></i> */}
                         

                         {(toggle==false)?<i className=" fa fa-heart-o" onClick={()=>{
                                wishlist(ele._id)
                                
                                handleToggle()
                               }} />:  <i className=" fa fa-heart" onClick={()=>{
                                wishlist(ele._id)
                                    handleToggle()
                               }} />}
                              

                               

                        
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>{" "}
                    <img
                     src={ele.image1?"http://ec2-35-77-227-175.ap-northeast-1.compute.amazonaws.com:5000/images/"+ele.image1:"" }
                     style={{cursor:"pointer",width:"170px",height:"170px" }}
                     onClick={() => {
                      history.push(`/ProductPage/${ele._id}`)
                  } }
                     />
                  </div>
                  <div className="product-detail-container">
                    <div className="d-flex  ">
                      <h4 align="center" className="dress-name">
                        {ele.name}
                      </h4>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5 align="left"  style={list_second}>List</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button  className="super_btn" >{ele.price}</button>
                      </div>
                    </div>
                   
                      <div className="row">
                        {" "}
                        <div className="col"> <button  align="left" style={btn_third}> <img src={connection} alt="" /> Connect</button></div>
                        <div className="col"> <button align="right" style={btn_two} onClick={() => {
      history.push(`/ProductPage/${ele._id}`)
  } }> <img src={list} alt="" /> List</button></div>
                       
                        <div className="col">
                        
                        
                        
                      </div>
                      </div>



                    <div className="d-flex justify-content-between align-items-left pt-1">
                      <div>
                        {" "}
                        
                        
                      </div>{" "}
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
 

   </div>
      
     
    </>
  );
}

export default Trending;
