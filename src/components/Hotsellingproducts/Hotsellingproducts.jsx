import React, { Component } from "react";
import Slider from "react-slick";
import shopingcard from "../../assets/shopingcard.png";
import './Hotsellingproduct.css'
import connection from "../../assets/connection.png";
import list from "../../assets/list.png";

const cardsize = {
  width: "160px",
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
const Connect_btn={

  fontstyle: "Poppins",
  fontWeight: "400",
  fontSize: "15.82px",
  lineHeigt: "22.23px",
  marginLeft: "10px",
  fontFamily: "poppins",
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'20px',
  marginTop:'5px' ,
  marginBottom:'5px',


}
const List_btn={
 
  fontstyle: "Poppins",
  fontWeight: "400",
  fontSize: "15.82px",
  lineHeigt: "22.23px",
  paddingLeft: "10px",
  fontFamily: "poppins",
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'20px',
  marginTop:'5px' 
}
const super_btnmedia={
  fontstyle: "Poppins",
  fontWeight: "400",
  fontSize: "15.82px",
  lineHeigt: "22.23px",
  paddingLeft: "10px",
  marginLeft: "10px",
  fontFamily: "poppins",
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  borderRadius:'20px' ,
  float:'left',
  
}
const header={
    justifyContent:'center',
    paddingTop:'10px',
    paddingBottom:'10px',
    backgroundColor:'#FDE31A',
    width:'200px',
    fontSize:'20px',
    borderRadius:'20px',
    marginBottom:'40px',
    marginTop:'40px'
  
  }
const product={
  color:'black',
  paddingTop:'10px'
}
export default class Responsive extends Component {
  state = {
    products: [1, 2, 3, 4, 5, 6],
  };
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
      <div align="center" id="headerMedia"  ><h3  style={header}>Hotselling Products</h3></div>
      <div className="container">
        <div align="center" id="MediaProduct">
          <Slider {...settings}>
          
            {/* <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={cardsize}>
                <div>
                  <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                </div>
                <h4>product name</h4>
                <div>
                  <h6>List</h6>
                </div>
              </div>
            </div> */}
            {this.state.products.map((ele, i) => (
              <div key={i}>
                <div className="card" style={cardsize}>
                <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="wishlist">
                          <i className="fa fa-heart-o" />
                        </span>{" "}
                        <span className="discount">Queue</span>{" "}
                      </div>
                    </div>
                  <div>
                    <img style={{ width: "150px" }} src={shopingcard} alt="" />{" "}
                  </div>
                  <h6 style={product}>product name</h6>
                
                  <div className="row">
                      <div className="col">
                        <h5 align="left"  style={list_second}>List</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button  style={super_btnmedia} >$24-15.25</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button  style={Connect_btn} >Connect</button>
                      </div>
                      <div className="col">
                        <button  style={List_btn} >List</button>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </>
    );
  }
}
