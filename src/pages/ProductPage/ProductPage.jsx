import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import shoppingcard from '../../assets/shopingcard.png'
import share from '../../assets/share.png';
import heart from '../../assets/heart.png'
import rebort from '../../assets/rebort.png'
import './ProductPage.css'
import swal from 'sweetalert'
import '../../components/Footer/Footer'
import avatar from '../../assets/avatar.png'
import { getProduct } from '../../Api/ProductRequest'
import Footer from '../../components/Footer/Footer'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';



import Trending from '../../components/Trending/Trending'

const listings={
    display: 'flex',
    listStyleType:'none',
   justifyContent:'space-evenly'
    
}
const inputtext={
  backgroundColor:'rgba(239, 239, 239, 1)',
  width:'180px',
  height:'32px',
  top:'223px',
  borderRadius:'27.51px',
  borderColor:'transparent',

}
const btn={
  color:'rgba(70, 70, 70, 1)',
  backgroundColor:'rgba(253, 227, 26, 1)',
  borderRadius:'18px',
  borderColor:'transparent',
  marginTop:'20px',
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", 
  padding:'5px',
  width:'80px',

 
}
const selectbox={
  backgroundColor:'rgba(239, 239, 239, 1)',
  width:'180px',
  height:'32px',
  top:'223px',
  borderRadius:'27.51px',
  borderColor:'transparent', 
}
const heading={
  fontSize:'24px',
  lineHeight:'36px',
  fontWeight:'400',
  color:'rgba(129, 129, 129, 1)',
  fontStyle:'Poppins'
}
const inventerybtn={
  color:'rgba(70, 70, 70, 1)',
  backgroundColor:'white',
  borderRadius:'18px',
  borderColor:'rgba(253, 227, 26, 1)',
  marginTop:'20px',
  width:'130px',
  height:'45px' ,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", 
}
const displaybtn={
  color:'rgba(70, 70, 70, 1)',
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  backgroundColor:'rgba(253, 227, 26, 1)',
  borderRadius:'18px',
  borderColor:'transparent',
  marginTop:'20px',
  width:'130px',
  height:'45px' 
}
const btnbuy={
  backgroundColor:'#FDE31A',
  padding:'5px',
  borderRadius:'20px',
  borderColor:'transparent'
  ,width:'130px',
  margin:'10px',
 
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)", 
}
const label={
  color:'rgb(0,0,0,1)',
  fontSize:'15px',
  fontWeight:'400',
  fontStyle:'Poppins'

}


const btncompany={
  color:'rgba(70, 70, 70, 1)',
  backgroundColor:'rgba(253, 227, 26, 1)',
  borderRadius:'18px',
 marginBottom:'10px',
  oulineColor:'transparent',
  width:'210px',
  borderWidth:'0px',
  borderColor:'transparent',
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" ,
  height:'35px',
  fontSize:'15px',
  marginLeft:'50px'
}

const ratings={
  marginBottom:'10px'
}

const conatinerrow={
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" ,
  padding:'10px',
  borderRadius:'10px',
  marginBottom:'20px'
}


function ProductPage() {

  const value = 3.5;
  const [post ,setPost]=useState({})
  const params =useParams()
  // useEffect(async()=>{
  //     const {data}=await getProduct(params.id)
 
  //     setPost(data)
  // })
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const {data}=await getProduct(params.id)
 
      setPost(data)
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  return (
    <>
    <Navbar />
  
    <Shopnavbar />
    <div>
      
      <div className="container-fluid" style={{marginBottom:'50px'}}>
        <div className="col-lg-11 p-3 main-section shadow-lg mt-n9" id="carasouelsection">
        <h5 style={heading}>Women ‘s Clothing / Tops & Sets / {post.name}  </h5> 
          <div className="row m-0">

           
            <div className="col-lg-4 left-side-product-box pb-3">
            <div align="center" className='row' >
              <div className='col'><button  style={displaybtn}> Display</button></div>
             
              <div className='col'> <button style={inventerybtn}>Inventory</button> </div>
            </div>
              <img src={post.image1?"https://server.dropspot.in/images/"+post.image1:""} style={{marginTop:"20px"}}/>
              <span className="sub-img">
                <img src={post.image2?"https://server.dropspot.in/images/"+post.image2:""} />
                <img src={post.image3?"https://server.dropspot.in/images/"+post.image3:"" } />
               
              </span>
              <div className="row ">
                <div className="col">
                  <div align="center"><img style={{width:'20px',height:'20px'}} src={share} alt="" /></div>
                   <div align="center"> <button  style={btn}>Share</button> </div>
                </div>
                
                <div className="col">
                <div align="center"><img style={{width:'20px',height:'20px'}} src={heart} alt="" /></div>
                 
                <div align="center"> <button  style={btn}>Wishlist</button></div></div>
                <div className="col">
                  <div align="center"><img style={{width:'20px',height:'20px'}} src={rebort} alt="" /></div>
                
                <div align="center"><button style={btn}>Report</button></div></div>
              </div>
          
            </div>
           

            <div className="col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0 shadow-lg mt-n9" id="carasouelsection">
                <div className="row">
                  <div className="col-lg-12 pt-2">
                  
                    <span style={{fontWeight:'800',fontSize:'22px',lineHeight:'40px',fontStyle:'Poppins',color:'rgba(0,0,0,1)'}}> <h2>{post.desc}</h2> </span>
                    <div className="col-lg-12" style={{marginTop:'20px',paddingBottom:'20px'}} >
                    <div className="colors"  ><h4>Color</h4>
                    
                        <div className="color" style={{backgroundColor: 'rgba(219, 30, 30, 1)',marginLeft:'20px',marginTop:'5px'}} data-hex="#e1e851" />
                        <div className="color" style={{backgroundColor: 'rgba(255, 101, 166, 1)',marginLeft:'10px',marginTop:'5px'}} data-hex="#8cd147" />
                        <div className="color" style={{backgroundColor: 'rgba(33, 33, 33, 1)',marginLeft:'10px',marginTop:'5px'}} data-hex="#4a9ccf" />
                        <div className="color" style={{backgroundColor: 'rgba(16, 11, 255, 1)',marginLeft:'10px',marginTop:'5px'}} data-hex="#661f45" />
                        
                    </div>
                    <br />
                    <br />
                  </div>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                  <div className="row">
                    <div className="col" style={{marginLeft:'20px'}}> 
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit',listStyleType:'none'}}> <h5>Shipping Fee:</h5> </li>
                    <br />
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit',listStyleType:'none'}}> <h5> Service Fee</h5></li>
                    <br />
                  <div style={{display:'flex'}}>
                  <div><h5>Quantity</h5></div>
                   <div>
                   <div className='wrapper'>
                        <span className='minus'>-</span>
                        <span className='num'>1</span>
                        <span className='plus'>+</span>
                    </div>
                   </div>
                  </div>
                    <br />
                    <li style={{fontSize:'20px',lineHeight:'43.94px',fontWeight:'400',fontStyle:'Poppins',listStyle:'inherit',listStyleType:'none'}}> <h5>SKU:</h5>
                     </li>
                     <button style={{backgroundColor:'#FDE31A',fontSize:'15px',fontWeight:'800',borderRadius:'30px',color:'black',width:'200px',height:'50px',borderColor:'transparent',marginTop:'30px', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)" }}>Product Price:${post.price}</button>
                    </div>
                      
                    <div className="col">
                    <div align="center" class="row" style={{marginnBottom:'10px'}} >
                    <div className="container" style={{width:'350px',paddingRight:'20px'}}>
                        <br />
                      <form action="">
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <div style={{justifyContent:'left'}}><label style={label} htmlFor=""><h5>Shipping To</h5> </label></div>
                          <div style={{justifyContent:'right'}}><select  style={selectbox} name="" id="">
                            <option  value="">value</option>
                            <option value=""></option>
                            <option value=""></option>
                          </select></div>
                         </div>
                         <br />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <div style={{justifyContent:'left'}}><label style={label} htmlFor=""> <h5>Seller</h5></label></div>
                          <div  style={{justifyContent:'right'}}><input style={inputtext} type="text" /></div>
                        </div>
                        <br />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{justifyContent:'left'}}>  <label style={label} htmlFor=""><h5>Estimated Delivery Time</h5></label></div>
                        <div  style={{justifyContent:'right'}}>text</div>
                        </div>
                        <br />
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{justifyContent:'left'}}>  <label style={label} htmlFor=""><h5>Tracking Information</h5></label></div>
                        <div style={{justifyContent:'right'}}>text</div>
                        </div>
                      </form>
                      </div>

                    <div>
                    
                    </div>
                    <br />
                 
                  <div class="w-100 d-none d-md-block"></div></div>
                  <div className='row' style={conatinerrow}>
                  <div className='flexconatiner'>
                        <div className='flexleft'>
                          <div><img src={avatar} style={{width:'5rem'}} alt="" /></div>
                        </div>
                        <div className='flexrighht'>
                          <div ><button style={btncompany}>company's name</button></div>
                         
                          <div align="center" style={ratings}> <h4>Ratings
                             <span >
                             <Box
                            sx={{
                             
                              width: 200,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Rating
                              name="text-feedback"
                              value={value}
                              readOnly
                              precision={0.5}
                              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            <Box sx={{ ml: 2 }}></Box>
                          </Box>
                          </span>
                            </h4>
                        
                          </div>
                          
                          <div  > <button style={btncompany}>Contact information</button> </div>
                        </div>
                      </div>
                  </div>
       

                      </div>
                  </div>
               
                  
                  <div className="col-lg-12">
                  
                    <div className="col-lg-12 mt-3" style={{margin:'10px'}}>
                      <div className="col-lg-20" style={listings} >
                        <button style={btnbuy}>Buy Now</button>
                        <button style={btnbuy}>Connect</button>
                        <button style={btnbuy}>List</button>
                        <button style={btnbuy}>Queue</button>
                        <button style={btnbuy}
                          onClick={
                            ()=>{
                              swal({
                                text: 'Enter quantity".',
                                content: "input",
                                button: {
                                  text: "Submit!",
                                  closeModal: false,
                                },
                              })
                              .then(name => {
                                if (!name) throw null;
                               
                                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
                              })
                              .then(results => {
                                return results.json();
                              })
                              .then(json => {
                                const movie = json.results[0];
                               
                                if (!movie) {
                                  return swal("No movie was found!");
                                }
                               
                                const name = movie.trackName;
                                const imageURL = movie.artworkUrl100;
                               
                                swal({
                                  title: "Top result:",
                                  text: name,
                                  icon: imageURL,
                                });
                              })
                              .catch(err => {
                                if (err) {
                                  swal("Oh noes!", "The AJAX request failed!", "error");
                                } else {
                                  swal.stopLoading();
                                  swal.close();
                                }
                              });
                            }
                      
                                       }
                        
                        >Add to cart</button>
                      </div>
                    </div>
                  </div>
                 
                
                  
                </div>
              
              </div>
              
            </div>

 
          </div>
        </div>
      </div>

    </div>
    <br />
    <div className='conatiner shadow-lg' id="carasouelsection" style={{marginTop:'40px'}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row align="center" style={{margin:'40px 40px 40px 40px',padding:'40px 40px 40px 40px'}}>
            <Col sm={3}>
              <Nav   className="flex-column">
                <Nav.Item style={{backgroundColor:'#FDE31A'}}>
                  <Nav.Link eventKey="first" style={{color:'black',fontSize:'15px',fontWeight:'800'}}>Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" style={{color:'black',fontSize:'15px',fontWeight:'800'}}>Review</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
      vcnlknlvnvojoejvojovojpojojojcnsdkn
                </Tab.Pane>
                <Tab.Pane eventKey="second">
            
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    </div>
  
    <div className='container-fluid' style={{marginTop:'50px'}}>
      <div className='recomdproduct'><h2>Recomanded Products</h2></div>
      <br />
      <Trending />
    </div>
    <Footer />


    </>
  )
}

export default ProductPage
