import React,{useState,useRef} from 'react'
import './Sourchingform.css'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab } from '@headlessui/react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import 'bootstrap/dist/css/bootstrap.css';


import Papa from 'papaparse';
import { uploadCsv } from '../../Api/ProductRequest';


function Sorchingform() {

  const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


    //Button Click Function
  
  
    //Button Click Function
   
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
  const loading =useSelector((state)=>state.postReducer.uplading)
  const dispatch=useDispatch()
  const [image,setImage]=useState([])
  const [csv,setCsv]=useState([])
  const desc=useRef()
  const name=useRef()
  const price=useRef()
  const quantity=useRef()
  const imageRef=useRef()
  const csvRef=useRef()
  const skuId=useRef()
  const descrip=useRef()
  const height=useRef()
  const width=useRef()
  const deapth=useRef()
  const weight=useRef()
  const category=useRef()
  const subCategory=useRef()
  const maxprice=useRef()
  const color=useRef()
  const Material=useRef()
  const onImageChange=(event)=>{
      if(event.target.files && event.target.files[0]){
          let img=event.target.files[0];
          let images=[...image]
        images.push(img)
          setImage(images)
      }
  }

  const onCChange=(event)=>{
    if(event.target.files && event.target.files[0]){
        let img=event.target.files[0];
        
     
       
   
        const parseFile = img => {
          Papa.parse(img, {
            header: true,
            complete: results => {
              setCsv(results.data)
              console.log("allooo",results.data);
            },
          });
        };

        parseFile(img)
    }
}

const subbtn={
  backgroundColor:'rgba(253, 227, 26, 1)',padding:'5px',color:'black',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",marginLeft:'20px',borderRadius:'5px'
}
  // const {user} =useSelector((state)=>state.authReducer.authData);
  const handleSubmit=(e)=>{
      e.preventDefault();

      const newPost={
          // userId:user._id,
           title:desc.current.value,
           desc:descrip.current.value,
          name:name.current.value,
          price:price.current.value,
          quantity:quantity.current.value,
          height:height.current.value,
          width:width.current.value,
          deapth:deapth.current.value,
          weight:weight.current.value,
          sku:skuId.current.value,
          category:category.current.value,
          subCategory:subCategory.current.value,
          color:color.current.value,
          maxprice:maxprice.current.value,
          Material:Material.current.value,
          image0:null,
          image1:null,
          image2:null,
          image3:null,
          image4:null,
          
      }
console.log(newPost);
     
          // const data=new FormData()
          // const filename =Date.now() + image.name
          // data.append("name",filename)
          // data.append("file",image)
          // newPost.image=filename
          // console.log(newPost)
          console.log(image);
          alert()
         
          for(let i=0;i<image.length;i++){
          
            const data=new FormData()
            
              const filename =Date.now() + image[i].name
              data.append("name",filename)
              data.append("file",image[i])
              
              newPost["image"+i]=filename
              console.log(newPost)
           
            try {
              dispatch(uploadImage(data))
          } catch (error) {
              console.log(error)
          }
          }
         
  
      dispatch(uploadPost(newPost))
      resetShare();
      
  }

  const resetShare=()=>{
      setImage(null)
      desc.current.value=null;
      name.current.value=null;
      price.current.value=null;
      quantity.current.value=null;
      weight.current.value=null;
      height.current.value=null;
      deapth.current.value=null;
      width.current.value=null;
      descrip.current.value=null;
      skuId.current.value=null;
      category.current.value=null;
      subCategory.current.value=null;
      maxprice.current.value=null;
      color.current.value=null;
      Material.current.value=null;
      toast.success("Product added successfully")
  }

  const handleCsvSubmit=async(e)=>{
    e.preventDefault();
    try {
      const data= await uploadCsv(csv)
      console.log(data);
      toast.success("Product added successfully")
    } catch (error) {
      console.log(error)
      toast.error("somehing went wrong")
    }
  }

  const tabheader={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    border:' 0.5px solid rgba(0, 0, 0, 0.25)',
    width:'auto',
    padding:'10px',
    fontWeight:'800',
    height:'50px',
    alignItems:'center',
    borderRadius:"10px",
    margin:'15px 5px 15px 5px'  
  }

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


 
  return (
    <>
    <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
    <div className='headingAll'><h2>Sourcing </h2></div>
      <Tab.Group>
      <div className='conatiner' style={buttonheader}>
      <Tab.List className='tablist' >

                <Tab  className='tabbtn'>Upload Individual Product</Tab>
                <Tab className='tabbtn'>Bulk Upload</Tab>
               
              </Tab.List>
         </div>
             
         
          
          <Tab.Panels style={tabpanls}>
            <Tab.Panel>
              <div className='Dashboardheading'><h3>Upload Individiual Product</h3></div>
            <form className="container">

<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Product Name</label>
  </div>
  <div className='flexright'>
  <input type="text" style={{width:'1000px'}} className='inputfield' ref={name} required />
  </div>
</div>



<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Product tag</label>
  </div>
  <div className='flexright'>
  <input type="text" style={{width:'1000px'}} className='inputfield' ref={desc} required />
  </div>
</div>



<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Product discription</label>
  </div>
  <div className='flexright'>
    <textarea className='inputfield' name="" id="" cols="30" rows="10" ref={descrip}></textarea>

  </div>
</div>


<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">SKU Id</label>
  </div>
  <div className='flexright'>
  <input type="text" style={{width:'1000px'}} className='inputfield' ref={skuId} required />
  </div>
</div>
<div>

  
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Category</label>
  </div>
  <div className='flexright'>
  <select style={{width:'400px'}} className='inputfield' ref={category}>
    <option value="none">none</option>
    <option value="Clothes">Clothes</option>
    <option value="Jwells">Jwells</option>
    <option value="electronics">electronics</option>
  </select>
  </div>
</div>
<div>

</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Sub category</label>
  </div>
  <div className='flexright'>
  <select style={{width:'400px'}} className='inputfield' ref={subCategory}>
  <option value="none">none</option>
  <option value="ladies">ladies</option>
  <option value="gents">gents</option>
  <option value="premium">premium</option>
</select>
  </div>
</div>
<div>
  
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Show Similar Product</label>
  </div>
  <div className='flexright'>
  <input style={{width:'20px',height:'20px'}} type="checkbox" name />
  
    <label className='Checklabelyes'>yes</label>
    <input style={{width:'20px',height:'20px'}}    type="checkbox" name />
    <label className='Checklabel'>No</label>
  </div>
</div>
<div> 
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Manufacturer Price</label>
  </div>
  <div className='flexright'>
  <input style={{width:'1000px'}} type="text" className='usdselecbox' ref={price} required />
  
   
  </div>
</div>
<div> 
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Maximum Retail Price</label>
  </div>
  <div className='flexright'>
  <input style={{width:'1000px'}} type="text" className='usdselecbox' ref={maxprice} required />
  
   
  </div>
</div>
<div> 
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Purchasing item</label>
  </div>
  <div className='flexright'>
  <span style={{marginLeft:'30px'}}>
    <input style={{width:'20px',height:'20px'}}  type="checkbox" name />
    <label className='Checklabel' >Bulk</label>
    
    <input style={{marginLeft:'20px',width:'20px',height:'20px'}}  type="checkbox" name />
    <label  className='Checklabel' >Dropshipping</label>
    
    </span> 

  </div>
</div>
<div> 
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label  className="labelstyle"> Quantity Available</label>
  </div>
  <div className='flexright'>
  <input style={{width:'1000px'}} type="text" className='inputfield' ref={quantity} required />

  </div>
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Attachment</label>
  </div>
  <div className='flexright'>
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
  <input style={{backgroundColor:'transparent'}} type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />

  </div>
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Material</label>
  </div>
  <div className='flexright'>
  <input style={{width:'400px'}}  type="text" className='inputfield' ref={Material} required />

  </div>
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Product height</label>
  </div>
  <div className='flexright'>
  <input style={{width:'400px'}} type="text" className='inputfield' ref={height} required />

  </div>
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Product width</label>
  </div>
  <div className='flexright'>
  <input style={{width:'400px'}} type="text" className='inputfield' ref={width} required />

  </div>
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Product weight</label>
  </div>
  <div className='flexright'>
  <input style={{width:'400px'}} type="text" className='inputfield' ref={weight} required />

  </div>
</div>
<div className='flexConatiner'>
  <div className='flexleft'>
  <label className="labelstyle">Product deapth</label>
  </div>
  <div className='flexright'>
  <input style={{width:'400px'}} type="text" className='inputfield' ref={deapth} required />

  </div>
</div>




</div>

<div className='flexconatiner' style={{display:'flex',justifyContent:'space-evenly',width:'700px',marginTop:'40px',marginBottom:'40px'}}>
<div className='flexitemleft' style={{justifyContent:'left'}}>
<div>

<button  onClick={handleClickOpen} style={{color:'black',borderColor:'transparent',backgroundColor:'rgba(253, 227, 26, 1)',borderRadius:'20px',fontSize:'15px',fontWeight:'800',padding:'10px',width:'150px'}} >Add Variations</button>

<Dialog open={open} onClose={handleClose}>
<DialogTitle>Add Variations</DialogTitle>
<DialogContent style={{width:'100%'}}>
  <DialogContentText >
    <div className='containerfor'style={{width:'500px'}} >
      <form action="">
      <div className='flexcontianerform'>
    <div className='flexleft'><label htmlFor="">Title</label></div>
    <div className='flexright'><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div className='flexleft'><label htmlFor="">Catogory</label></div>
    <div className='flexright'>
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
      </select></div>
   </div>
   <div className='flexcontianerform'>
    <div className='flexleft'><label htmlFor="">Color Code</label></div>
    <div className='flexright'><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div className='flexleft'><label htmlFor="">Product Size</label></div>
    <div className='flexright'>
      <select name="" id="">
        <option value="">-----</option>
        <option value="">S</option>
        <option value="">M</option>
        <option value=""></option>
      </select>
    </div>
   </div>
   <div className='flexcontianerform'>
    <div className='flexleft'><label htmlFor="">Price</label></div>
    <div className='flexright'><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div className='flexleft'><label htmlFor="">Manufacturer Price</label></div>
    <div className='flexright'><input type="text" /></div>
   </div>
   <div className='flexcontianerform'>
    <div className='flexleft'><label htmlFor="">Maximum Retail Price</label></div>
    <div className='flexright'><input type="text" /></div>
   </div>
      </form>
    </div>

  </DialogContentText>
 
</DialogContent>
<div align="center">
<DialogActions >
  <div align="center" style={{marginRight:'30%',display:'flex',marginBottom:'10px'}}>
  <div ><button style={{backgroundColor:'black',padding:'5px',color:'yellow',width:'100px',borderColor:'transparent', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'5px' }} onClick={handleClose}>Cancel</button></div>
  <div ><button style={subbtn} onClick={handleClose}>Submit</button></div>
  </div>


 
</DialogActions>
</div>

</Dialog>
</div>
</div>
<div className='flexitemcenter' style={{justifyContent:'center'}} >
  <div > <button className='clearbtn'>Clear</button> </div>
</div>


<div className='flexitemright' style={{justifyContent:'left'}} >
  <div > <button className='productbtn'>Add Product</button> </div>
</div>
</div>



</form>
            </Tab.Panel>
            <Tab.Panel>
            <div className='container'>
            <div className='Dashboardheading'><h3>Bulk Upload</h3></div>
    <span><h5 style={{color:"red"}}>Or Upload CSV file</h5></span>
        <form action="">
        <br />
      <input type="file" id="myFile"  name="myCsv"  ref={csvRef} onChange={onCChange} />

    <br />
      <button className='subbtn'onClick={handleCsvSubmit} disabled={loading}>
                         {loading?"Uploading...":"Add Products"}
                     </button>
      </form>
    </div>
            </Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div>

      
   
      <ToastContainer />
    </>
  )
}

export default Sorchingform
