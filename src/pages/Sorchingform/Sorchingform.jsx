import React,{useState,useRef} from 'react'
import './Sourchingform.css'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Papa from 'papaparse';
import { uploadCsv } from '../../Api/ProductRequest';
import { color } from '@mui/system';
function Sorchingform() {
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
  return (
    <>
    
    <form className="container">
        <div align="center" ><h5 className='Individual'>Individual Products</h5></div>
        <div>
          <p><label className="labelstyle">Attachment</label>
            <span>
              <input type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
            </span> 
            <br />
            <span>
              <input type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
            </span>
            <br />
            <span>
              <input type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
            </span>
            <br />
            <span>
           
              <input type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
            </span>
            <br />
            <span>
           
           <input type="file" id="myFile" name="myImage"  ref={imageRef} onChange={onImageChange} />
         </span>
         <br />
          </p>
          <h6><label className="labelstyle">Product tag</label>
            <span>
            <input type="text" className='selectbox' ref={desc} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">Product title</label>
            <span>
              <input type="text" className='selectbox' ref={name} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">Material</label>
            <span>
              <input type="text" className='selectbox' ref={Material} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>

          <h6><label className="labelstyle">Category</label>
            <span>
               <select className='selectbox' ref={category}>
                <option value="none">none</option>
                <option value="Clothes">Clothes</option>
                <option value="Jwells">Jwells</option>
                <option value="electronics">electronics</option>
              </select>
            </span> 
          </h6>
          <h6><label className="labelstyle">Sub category</label>
            <span>
            <select className='selectbox' ref={subCategory}>
                <option value="none">none</option>
                <option value="ladies">ladies</option>
                <option value="gents">gents</option>
                <option value="premium">premium</option>
              </select>
            </span> 
          </h6>
          <h6><label className="labelstyle">Color</label>
            <span>
            <input type="text" className='usdselecbox' ref={color} required />
              {/* <select className='usdselecbox' name="#" >
                <option value="#">Usd</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span>
          </h6>
          <h6><label className="labelstyle">Product discription</label>
            <span>
              <input type="text" className='selectbox' ref={descrip} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">Product height</label>
            <span>
              <input type="text" className='selectbox' ref={height} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">Product width</label>
            <span>
              <input type="text" className='selectbox' ref={width} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">Product weight</label>
            <span>
              <input type="text" className='selectbox' ref={weight} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">SKU Id</label>
            <span>
              <input type="text" className='selectbox' ref={skuId} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">Product deapth</label>
            <span>
              <input type="text" className='selectbox' ref={deapth} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
          <h6><label className="labelstyle">Accept Similar Product</label>
            <span style={{marginLeft:'30px'}}>
            <input className='checkbox-round' type="checkbox" name />
              <label className='Checklabel'>yes</label>
              <input style={{marginLeft:'20px'}} className='checkbox-round' type="checkbox" name />
              <label className='Checklabel'>No</label>
          
            </span> 
          </h6>
          <h6><label className="labelstyle">Target Price</label>
            <span>
            <input type="text" className='usdselecbox' ref={price} required />
              {/* <select className='usdselecbox' name="#" >
                <option value="#">Usd</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span>
          </h6>
          <h6><label className="labelstyle">Maximum Price</label>
            <span>
            <input type="text" className='usdselecbox' ref={maxprice} required />
              {/* <select className='usdselecbox' name="#" >
                <option value="#">Usd</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span>
          </h6>
          <h6><label className="labelstyle">Destination Country</label>
            <span style={{marginLeft:'30px'}}>
              <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">India</option>
                <option value="#">Us</option>
                <option value="#">China</option>
              </select>
            </span>
          </h6>
          <h6><label className="labelstyle">Purchasing item</label>
            <span style={{marginLeft:'30px'}}>
            <input className='checkbox-round' type="checkbox" name />
              <label className='Checklabel' >Bulk</label>
              
              <input style={{marginLeft:'20px'}} className='checkbox-round' type="checkbox" name />
              <label  className='Checklabel' >Dropshipping</label>
              
            </span> 
          </h6>
          <h6><label  className="labelstyle">Estamated Quantity</label>
            <span>
            <input type="text" className='selectbox' ref={quantity} required />
              {/* <select className='selectbox' name="#">
                <option value="#">Select</option>
                <option value="#">#link1</option>
                <option value="#">link2</option>
                <option value="#">#link3</option>
              </select> */}
            </span> 
          </h6>
        </div>
        <br />
        <br />
        <br />
        <div className="flex-container">
          <div className="flex-item-left">
        <button className='clearbtn'>clear</button>
          </div>
          <div className='flex-item-right' style={{marginLeft:'80px'}}>

          <button className='subbtn'onClick={handleSubmit} disabled={loading}>
                         {loading?"Uploading...":"Share"}
                     </button>
          </div>
        </div>
        
      </form>
      <br />
      <span><h5 style={{color:"red"}}>Or Upload CSV file</h5></span>
      <form action="">
        <br />
      <input type="file" id="myFile"  name="myCsv"  ref={csvRef} onChange={onCChange} />

    <br />
      <button className='subbtn'onClick={handleCsvSubmit} disabled={loading}>
                         {loading?"Uploading...":"Share"}
                     </button>
      </form>
      <ToastContainer />
    </>
  )
}

export default Sorchingform
