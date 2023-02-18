import React , { useState }from 'react'
import googleicon from '../../assets/googleicon.png'
import facebookicon from '../../assets/facebookicon.png'
import smart from '../../assets/smart.png'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar'
import './NewLogin.css'
import {LoginSocialFacebook} from "reactjs-social-login"
import {FacebookLoginButton} from "react-social-login-buttons"
import { login, signUp } from "../../Api/AuthRequest";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

//import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const NewLogin = () => {
  const userInfo = localStorage.getItem("userInfo");
  
  const [user, setData] = useState({
  
    email: "",

    password: "",
  });
  const history = useHistory();
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
   //one tap google login
  //  useGoogleOneTapLogin({
  //   onSuccess: (response) => {
  //     localStorage.setItem("userInfo", response);
  //     history.push("/");
  //   },
  //   onError: (error) => console.log(error),
  //   googleAccountConfigs: {
  //     client_id:
  //       "820965083830-suli7t5b5bul27109gngq9i9ks8fsv9e.apps.googleusercontent.com",
  //   },
  // });

  const handleChange = (e) => {
    setData({ ...user, [e.target.name]: e.target.value });
  };

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === "") {
      setError2(true);
    } else {
      try {
        const { data } = await login(user);
        console.log(data);
        localStorage.setItem("userInfo", data);
        console.log(data.user._id);
        localStorage.setItem("userId", data.user._id);
        resetForm();
        history.push("/");
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
     history.push("/");
    }
  }, [history]);

  const resetForm = () => {
    setConfirmPass(true);
    setData({ email: "",  password: "" });
  };
  const [confirmPass, setConfirmPass] = useState(true);

  return (
  <div>
    <Navbar />
    <div className='flex-conatiner300'  >
     <div className='flex-item-left300' >
        <div align="center" style={{paddingTop:'40px',paddingBottom:'20px'}}><h1>Login</h1></div>
            <div className='containerform'>
            <form  align="center" action=""  onSubmit={handleSubmit} >
                <div  >
                <button style={{width:"50px"}}  className='submitbtn' onClick={()=>{
                  history.push("/")
                }} > Back</button>
                    <div ><label htmlFor="" style={{marginTop:'20px'}}>Email</label></div>
                                        <div>
                                          <input
                                        placeholder="Enter Your Email"
                                       
                                        name="email"
                                        className='inputbox' 
                                        type="Email"
                 value={user.email}
                 onChange={handleChange}
                                        />

               </div>
                                        {error2 && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
                    </div>
                    <div >
                                    <div><label htmlFor="" style={{marginTop:'20px'}}>Password</label></div>
                                    <div><input  type="password "
                                    placeholder="Enter Your password"
                                    name="password"
                                
                                    className='inputbox'
                                    onChange={handleChange}
                                    value={user.password}
                                  
                                    /></div>
                                     {error && <span style={{ color: "red" }}> * Wrong password </span>}
           
                    </div>
                    <div style={{marginTop:'20px'}}> 
                            <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}}>Login</button></div></div>
                    </div>
                            <div style={{paddingTop:'20px'}}> <input type="checkbox"  name="submit_form" id="submit_form" value="yes" />
                        <label for="send_newsletter" style={{color:'black'}}> Remember Me</label><span style={{float:'right',paddingRight:'20px'}}>Forgot Your Password?</span></div>
        
                            <div className="or-container">
                                <div className="line-separator" />
                                <div className="or-label">or</div>
                                <div className="line-separator" />
                            </div>
                            <div  className="flex-container">
                                {/* <div  className="flex-left"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img align="center" src={googleicon} alt="" /></button></div> */}
                                {/* <div  className="flex-right"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img  align="center" src={facebookicon} alt="" /></button></div> */}
                                <GoogleOAuthProvider clientId="820965083830-suli7t5b5bul27109gngq9i9ks8fsv9e.apps.googleusercontent.com">
                                  
                                    <GoogleLogin 
                                      onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                        if(credentialResponse){
                                          history.push("/")
                                        }
                                      }}
                                      onError={() => {
                                        console.log('Login Failed');
                                      }}
                                    />
                                  </GoogleOAuthProvider>
                               <LoginSocialFacebook
                               appId='716781016838370'
                               onResolve={(response)=>{
                                console.log(response)
                                if(response){
                                  history.push("/")
                                }
                               }}

                               onReject={(error)=>{
                                console.log(error);
                               }}
                               >


                               <FacebookLoginButton  style={{height:"36px"}}/>
                               </LoginSocialFacebook>
                            
                            </div>
             </form> 
            </div>
       </div>
     <div className='flex-item-right300'>
     <div className='flex-rightsign' style={{paddingTop:'50px'}} ><img src={smart} alt="" /></div>
     

         
     </div>
  
    </div>
    <Footer />
  </div>
  )
}

export default NewLogin
