import React from 'react'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import { Tab } from '@headlessui/react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './UserProfile.css'

function UserProfile() {
  const buttonheader={
    backgroundColor:'#FDE31A',
    borderRadius:'15px',
    width:'auto',
    alignItems:'center',
    height:'80px',
    alignSelf:'center'
    
  }
  const tabpanls={
    padding:'30px',

  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     <Navbar />
     <br />
     <Shopnavbar />
     <br />
   <div className='container'>
   <Tab.Group>
    <div className='container' style={buttonheader}>
    <Tab.List>
        <Tab className='tabbtn'>Resigtration Info</Tab>
        <Tab className='tabbtn'>Tab 2</Tab>
        <Tab className='tabbtn'>Tab 3</Tab>
      </Tab.List>
    </div>
     
      <Tab.Panels style={tabpanls}>
        <Tab.Panel>
          <div className='container' id="carasouelsection" style={{padding:'40px'}}>
    <div className='container' style={{margin:'20px'}}>
     <div className='row'>
              <div className='col'>
                <div >
                <div className='labelcil'>First Name</div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
                
              </div>
              <div className='col'>
              <div >
                <div className='labelcil'>Last Name</div>
                <div><input className='nputboxfirt' type="text"  required/></div>
                </div>
              </div>
              <div className='col'>
              <div>
                <div className='labelcil'>Email </div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <div >
                <div className='labelcil'>Mobile</div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
                
              </div>
              <div className='col-4'>
              <div >
                <div className='labelcil'>Country</div>
                <div><input className='nputboxfirt' type="text" required /></div>
                </div>
              </div>
              
            </div>
            <div className='row'>
              <div >
              <div >
                <div className='labelcil'>Address</div>
                <div><input className='nputboxfirtaddress' type="text" required /></div>
                </div>
              </div>
              
            </div>
       </div>
          </div>
          <div className='container'id="carasouelsection" style={{padding:'40px',marginTop:'40px'}} >
          
            <div className='flexcontainer'>
              
              <div className='flexleft'>
              <div  ><h4 style={{marginLeft:'10px'}}>Whatsup</h4></div>
                <p className='labelcil' style={{marginTop:'20px'}}>To directly communicate with your agent via WhatsAPP</p></div>
              <div className='flexright'><button className='contactbtn'>Contact us</button></div>
            </div>
          </div>
          <div className='container' id="carasouelsection" style={{padding:'40px',marginTop:'40px'}}>
    <div className='container' style={{margin:'20px'}}>
     <div className='row'>
              <div className='col-3'>
                <div >
                <div className='labelcil'>Facebook</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
                
              </div>
              <div className='col-3'>
              <div >
                <div className='labelcil'>Instagram</div>
                <div><input className='nputboxface' type="text"  required/></div>
              </div>
              </div>
              <div className='col-3'>
              <div>
                <div className='labelcil'>Line</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
              <div className='col-3'>
              <div>
                <div className='labelcil'>Linkdin</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-3'>
                <div >
                <div className='labelcil'>Skype</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
                
              </div>
              <div className='col-3'>
              <div >
                <div className='labelcil'>Twitter</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
              <div className='col-3'>
              <div >
                <div className='labelcil'>WeChat</div>
                <div><input className='nputboxface' type="text" required /></div>
                </div>
              </div>
              
            </div>
            
       </div>
          </div>
          <div className='container'id="carasouelsection" style={{padding:'40px',marginTop:'40px'}} >
          
            <div className='flexcontainer'>
              
              <div className='flexleft'>
              <div  ><h4 style={{marginLeft:'10px'}}>Whatsup</h4></div>
                <p className='labelcil' style={{marginTop:'20px'}}>To directly communicate with your agent via WhatsAPP</p></div>
              <div className='flexright'><button className='contactbtn'>Contact us</button></div>
            </div>
          </div>
          
        </Tab.Panel>
        <Tab.Panel>   
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Address
      </Button>
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle>Add Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
       <div className='flexcontainerform' >
        <div className='flexleft'><h5>First name</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Last name</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Address 1:</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Address</h5></div>
        <div className='flexright'><input type="text" /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Province</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>City</h5></div>
        <div className='flexright'><input type="text" required /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Country</h5></div>
        <div className='flexright'><input type="text" /></div> 
       </div>
       <div className='flexcontainerform'>
        <div className='flexleft'><h5>Phone</h5></div>
        <div className='flexright'><input type="text" /></div> 
       </div>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog> </Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
   </div>
    </div>
  )
}

export default UserProfile
