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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
  backgroundColor: "white",
fontWeight:'500',
fontSize:'15px',
  color: "black",
  width: "100px",
  borderRadius: "20px",
  marginTop: "20px",
  marginLeft: "5px",
  fontFamily: "poppins",
  float:'right',
 
  borderColor:'rgba(255, 214, 0, 1)',

 
};
const list_second = {
  color: "rgba(165, 165, 165, 1)",
  fontstyle: "Poppins",
  fontWeight: "500",
  fontSize: "17.82px",
  lineHeigt: "22.23px",
  paddingLeft: "15px",
  fontFamily: "poppins",
  backgroundColor:'transparent',
  borderColor:'transparent'

 

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
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  return (
    <>
   <div align="center"  id="trendingcontainer" className="conatiner-fluid">
    <div className="col-md-16" style={{width:'100%'}}>
    <div className="row">
          {products &&
            products.length > 0 &&
            products.map((ele) => (
              <div className="col"  >
                <div align="center" className="card" style={carddesign}>
                  <div className="image" style={{width:'100%'}}>
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
                     src={ele.image1?"https://server.dropspot.in/images/"+ele.image1:"" }
                     style={{cursor:"pointer",width:"100%",height:"170px" }}
                     onClick={() => {
                      history.push(`/ProductPage/${ele._id}`)
                  } }
                     />
                  </div>
                  <div className="product-detail-container">
                    <div className="d-flex  ">
                      <h4 align="left" className="dress-name" >
                        {ele.name}
                      </h4>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div ><button onClick={handleClickOpen} style={list_second}>List</button>
                        <Dialog  open={open} onClose={handleClose}>
                        
                        <DialogContent>
                          <DialogContentText>
                           <div>
                            <div className="row" >
                              <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px'}}>Listed</button></div>
                              <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'80px'}}>Queue</button></div>
                              <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'100px'}}>On Listing</button></div>
                              <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'150px'}}>Listing Failed</button></div>
                            </div>
                           </div>
                          </DialogContentText>
                          <div><h6> <button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'150px',height:'40px',marginTop:'20px'}}>Store</button> <span style={{marginLeft:'20px'}}>
                            <select style={{backgroundColor:'#DEDEDE',fontSize:'15px',width:"300px",height:'40px',borderColor:'transparent',borderRadius:'20px'}} name="" id="">
                            <option value="">Select</option>
                            <option value=""></option>
                            <option value=""></option>
                            </select></span></h6>
                            </div>
                            <div><h6> <button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'120px',height:'50px',marginTop:'40px'}}>Varient</button> <span style={{marginLeft:'20px'}}>
                              </span></h6>
                            </div>
                            <div className="row" style={{marginTop:'20px'}}>
                            <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'100px',height:'50px',marginTop:'40px'}}>Bulk Revise</button></div>
                            <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'100px',height:'50px',marginTop:'40px'}}>Price Change</button></div>

                            <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'50px',height:'50px',marginTop:'40px'}}>ok</button></div>
                            <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'20px',width:'150px',height:'50px',marginTop:'40px'}}>Recommended Listed Price</button></div>
                            </div>
                            
                            <div className="row" style={{backgroundColor:'rgba(253, 227, 26, 1)',borderColor:'transparent',marginTop:'40px'}} >
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Image</button></div>
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Sku</button></div>
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Style</button></div>
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>RRP</button></div>
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Price</button></div>
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>ShippingFee</button></div>
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Service fee</button></div>
                              <div className="col"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}>Total  Cost</button></div>

                            </div>
                            <div className="row" style={{marginTop:'20px'}}>
                                <div><h6 >Shipping Method <span>
                                  <select style={{backgroundColor:'#DEDEDE',fontSize:'15px',width:"300px",height:'40px',borderColor:'transparent',borderRadius:'20px',marginLeft:'20px'}} name="" id="">
                                    <option value="">option1</option></select></span></h6></div>
                              </div>
                            
                            <div>
                              <div className="row" style={{backgroundColor:'rgba(0, 0, 0, 1)',marginTop:'20px'}}>
                                <div className="col"><p style={{color:'white'}}>Estimated Delvery Time</p></div>
                                <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:"20px",marginTop:'20px'}}>7 8 days</button></div>
                                <div className="col"><p style={{color:'white'}}>Shipping Cost</p> </div>
                                <div className="col"><button style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:"20px",marginTop:'20px',}}>14.25</button></div>
                                <div className="col"><p style={{color:'white'}}>Tracking Information</p></div>
                              </div>
                            </div>
                            <div>

                              <div className="row">

                                <button className="col-4" style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:"20px",marginTop:'20px',width:'100px'}}>Edit before listing</button>
                              </div>
                             
                            </div>
                            

                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} style={{color:'black',padding:'5px',fontSize:'12px'}}>Cancel</Button>
                          <Button onClick={handleClose} style={{backgroundColor:'#FDE31A',color:'black',padding:'5px',fontSize:'12px'}}>List now</Button>
                        </DialogActions>
                      </Dialog>
                      </div>
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
