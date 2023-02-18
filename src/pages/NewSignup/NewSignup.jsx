import React,{ useState } from 'react'
import './NewSignup.css'
import  smart from '../../assets/smart.png'
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../../Api/AuthRequest.js";
import { ToastContainer, toast } from "react-toastify";
import  googleicon from'../../assets/googleicon.png'
import facebookicon from '../../assets/facebookicon.png'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar';
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar';
import { useHistory } from 'react-router-dom';

const NewSignup = () => {
  //user state
  const [user, setData] = useState({
    
    email: "",

    password: "",
    confirmpass: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);

  //handle input change
  const handleChange = (e) => {
 
    setData({ ...user, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  console.log(user);
  //form sunmit to server
  const handleSubmit = async (e) => {

    e.preventDefault();
    if (user.username === "" || user.email === "" || user.phone === "") {
      toast.error("Fields can't be empty");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
    ) {
      toast.error("Enter valid email id");
    } else if (user.password !== user.confirmpass) {
      toast.error("Password dosen't match");
    } else {
      try {
        const { data } = await signUp(user);
        console.log(data);
        localStorage.setItem("userInfo", data);
        resetForm();
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  //resetting form
  const resetForm = () => {
    setConfirmPass(true);
    setData({
     
      email: "",
     
      password: "",
      confirmpass: "",
    });
  };

  return (
    <>
    <Navbar />
    <br />
    <br />
    <div >
      
            <div className='flex-containersign' style={{backgroundColor:'rgba(255, 214, 0, 1)',paddingTop:'40px',paddingBottom:'40px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
              
                <div className='flex-leftsign'>
                <div align="center"><h1 style={{paddingTop:'20px',paddingBottom:'40px',fontSize:'25px',fontWeight:'800px'}}>Sign up to Drop your product to your store  spot</h1></div> 
                    <div className='contsiner' style={{backgroundColor:'white',borderRadius:'20px',width:'500px',boxShadow:'4px 4px 2px 2px dimgrey '}}>
                        <form  align="center" action="" onSubmit={handleSubmit}>
                            <div >
                                <div ><label htmlFor="" style={{marginTop:'20px'}}>Email</label></div>
                                <div><input
                                placeholder="Enter Your Email"
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                    className='inputbox' /></div>
                            </div>
                            <div >
                            <div><label htmlFor="" style={{marginTop:'20px'}}>Password</label></div>
                            <div><input  type="password "
                            placeholder="Enter Your password"
                            name="password"
                            onChange={handleChange}
                            value={user.password}
                            className='inputbox' /></div>
                            </div>
                            <div >
                            <div><label htmlFor="" style={{marginTop:'20px'}}>Confirm Password</label></div>
                            <div><input type="password " 
                            name="confirmpass"
                            placeholder="Enter Your Confirm Password"
                            onChange={handleChange}
                            value={user.confirmpass}
                            className='inputbox' /></div>
                            </div>
                            <div >
                            <div><label htmlFor="" style={{marginTop:'20px'}}>Account Type</label></div>
                            <div>
                                <select className='inputbox' name="" id="">
                                    <option value="">seller</option>
                                    <option value="">Dropshoper</option>
                                </select>
                            </div>
                            </div>
                            <div >
                            <div><label htmlFor="" style={{marginTop:'20px'}} >Invitation code</label></div>
                            <div><input type="text" className='inputbox' placeholder='Enter Invitation code' /></div>
                            </div>
                            <div style={{marginTop:'20px'}}><p><input type="checkbox"  className='checkbox-roundchecked'   
                    name="privacyPolicy"
                    id=""
                    value={true}
                    onChange={handleChange}
                    /> <span align="center"> <label htmlFor="">By clicking "Next", you agree to the user <br /> agreement and privacy policy</label> </span> </p> 
                 <div align="center" style={{marginTop:'30px'}}><div align="center" className='submitbtn'><button style={{backgroundColor:'transparent',borderColor:'transparent',}}>Submit</button></div></div>
                    </div>
                    <div align='center' className='Already'><h6 className='Already'>Already have an account?Sign In?</h6></div>
                      <div className="or-container">
                        <div className="line-separator" />
                        <div className="or-label">or</div>
                        <div className="line-separator" />
                      </div>
                      <div  className="flex-container">
                        <div  className="flex-left"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img align="center" src={googleicon} alt="" /></button></div>
                        <div  className="flex-right"><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img  align="center" src={facebookicon} alt="" /></button></div>
                      </div>
                        
                            
                        </form>
                    </div>
                </div>
                <ToastContainer />
                <div className='flex-rightsign' style={{marginTop:'300px'}}><img src={smart} alt="" /></div>
            </div>
        <Footer />
      
    </div>
    </>
  )
}

export default NewSignup
