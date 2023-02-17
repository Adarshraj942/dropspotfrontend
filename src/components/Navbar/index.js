
import React, { useReducer } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  
} from './NavbarElements';


import swal from "sweetalert";
import lang from '../../assets/lang.png'
import  MyCj from '../../pages/MyCj'

import droptik from '../../assets/droptik.png'
import dropship from '../../assets/dropship.png'
import dropwelmart from '../../assets/dropwalmart.png'
import dropcomerce from '../../assets/dropcomerce.png'
import dropamazon from '../../assets/dropamazon.png'
import { useHistory } from 'react-router-dom';

const Navbar = () => {

  const userInfo = localStorage.getItem("userInfo");
  const userId=localStorage.getItem("userId")
  const history=useHistory()


  return (
    <>
   
      <Nav>
        <Bars />
        <NavMenu>
        <div>
        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false " style={{backgroundColor:'white'}}>
         <span style={{paddingRight:'10px'}}><img src={lang} style={{height:'20px'}} alt="" /></span>Language</a>
        <div className="dropdown-menu" aria-labelledby="dropdown09">
          <a className="dropdown-item" href="#fr" > Hindi</a>
          <a className="dropdown-item" href="#it" >English</a>

        </div>
        </div>
        <div>
        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false " style={{backgroundColor:'white'}}>
         <span style={{paddingRight:'10px'}}><i class="fa fa-check-circle"></i></span>Autherization</a>
        <div className="dropdown-menu" aria-labelledby="dropdown09" >
          <a className="dropdown-item" href="#fr"><img src={droptik} alt="" /></a>
          <a className="dropdown-item" href="#it"><img src={dropship} alt="" /></a>
          <a className="dropdown-item" href="#it"><img src={dropwelmart} alt="" /></a>
          <a className="dropdown-item" href="#it"><img src={dropcomerce} alt="" /></a>
          <a className="dropdown-item" href="#it"><img src={dropamazon} alt="" /></a>
        </div>
        </div>
          <NavLink to='/wishlist' activeStyle>
           <span style={{paddingRight:'10px'}}><i class="fa fa-heart"></i></span>Wishlist
          </NavLink>
          <div>
      
        </div>
          <NavLink to='/HelpCenter' activeStyle>
          <span style={{paddingRight:'10px'}}><i class="fa fa-handshake-o"></i></span> Help Center
          </NavLink>
          <NavLink to='/Sourcingpage' activeStyle>
           <span style={{paddingRight:'10px'}}><i class="fa fa-group"></i></span>Sourcing
          </NavLink>
          <NavLink to='/MyCj' activeStyle>
          My Dropspot
          </NavLink>
          {userInfo? <button style={{backgroundColor:'#FDE31A',borderRadius:'50px',padding:'10px',borderColor:'transparent'}} 
          onClick={(e) => {
            e.preventDefault();
            swal({
              title: "Are you sure?",
              text: "Do yo want to logout!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                localStorage.removeItem("userInfo");

                history.push("/");
              } else {
                swal("Welcome back");
              }
            });
          }}
          
          >Log out</button>:   <NavLink to='/signin' activeStyle>
           <span><i style={{paddingRight:'10px'}} class="fa fa-user-plus"></i></span> Log in
          </NavLink>}
       {
        userInfo?"":   <NavLink style={{backgroundColor:'#FDE31A',borderColor:'transparent',borderRadius:'50px'}} to='/Signup' activeStyle>
        SignUp
        </NavLink>
       }
          
        
        {userInfo?    <div>
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false " style={{backgroundColor:'white'}}>
             <span><i style={{paddingRight:'10px'}} class="fa fa-user-circle-o"></i></span>{userId}</a>
            <div className="dropdown-menu" aria-labelledby="dropdown09">
              <a className="dropdown-item">
                <NavLink to='/UserProfile' activeStyle>
                Profile
                 </NavLink></a>
              <a className="dropdown-item" > 
              <NavLink to='/Calculation' activeStyle>
                Shipping Calculation
                 </NavLink>
                </a>
            
            </div>
            </div>:""}
  
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>

    </>
  );
};
  
export default Navbar;