
import freestore from "../../assets/free-store.png";
import Trendy from '../../assets/Trendy.png';
import ecomerce from '../../assets/ecomerce.png'
import templateone from '../../assets/templateone.png'
import freeshipping from '../../assets/free-shipping.png'
import acadamy from '../../assets/acadamy.png'
import fullfillment from '../../assets/fullfillment.png'
import odm from '../../assets/odm.png'
import video from '../../assets/video.png'
import './Section.css'
import purse from '../../assets/purse.png'
import ring from '../../assets/ring.png'
import tablet from '../../assets/tablet.png'
import dress from '../../assets/dress.png'
import sticks from '../../assets/sticks.png'
import hat from '../../assets/hat.png'
import home from '../../assets/home.png'
import bike from '../../assets/bike.png'
import toy from '../../assets/toy.png'
import shirt from '../../assets/shirt.png'
import circuit from '../../assets/circuit.png'



function Section() {
  const infostyle = {
    background: '#FFD600',
    height: "50px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  };

  const box={
    background:'#FFFFFF',
    width:'350px',
    boxshadow:'20px',
    borderRadius:'20px'
  }
  const list_style={
    background:'white',
    alignItems:'center',
    boxshadow:'2px 3px 5px whitesmoke',
    paddingLeft:'10px'
  }
  const shiiping={
    borderRadius:'20px',
    backgroundColor:'rgba(255, 221, 46, 1)',
    color:'rgba(0, 0, 0, 1)',
    borderColor:'transparent',
    fontstyle:'Poppins',
    fontSize:'14px',
    fontWeight:'400',
    lineHeight:'21px',
    width:'169px',
    height:'30px',
    marginTop:'25px'
  }
  const delivery={

    color:'rgba(0, 0, 0, 1)',

    fontstyle:'Poppins',
    fontSize:'14px',
    fontWeight:'400',
    lineHeight:'21px',
    width:'169px',
    height:'30px', 
    marginTop:'25px'
  }
  const order={
   
    color:'rgba(0, 0, 0, 1)',

    fontstyle:'Poppins',
    fontSize:'14px',
    fontWeight:'400',
    lineHeight:'21px',
    width:'169px',
    height:'30px', 
    marginTop:'10px' 
  }
    


  // 
  // 

  
  return (
    <>
      <div id="section">
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-3">
        <div align="center" className="sidenav">
        <div >
            <div className="flexutemcenter" style={{backgroundColor:'#FFD600',padding:'10px',width:'300px',height:'50px',marginTop:'3px'}}>All Catogries</div>
          </div>
           
        <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'40px'}}><img src={purse} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'15px'}}>Bags and shoes</div>
          </div>
         </button>
        <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft"  style={{marginLeft:'40px'}}><img src={ring} alt="" /></div>
            <div  className="flexutemright" style={{marginLeft:'15px'}}>Jewelory & Watches</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img src={tablet} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'15px'}}>Hair,Beauty & Hair</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img src={dress} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'15px'}}>Women's Clothing</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img src={home} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'15px'}}> Home,Garden & Furtinure</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img src={hat} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'15px'}}>Phone and Accessories</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img  src={sticks}alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'15px'}}>Sports & Outdoors</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img  src={bike} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'10px'}}>Automobiles & Motorcycle</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img  src={tablet} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'10px'}}>Health,Beauty & Hair</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img  src={toy} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'20px'}}>Toys, Kids & Babies</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
          <div className="flexutemleft" style={{marginLeft:'40px'}}><img  src={shirt} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'20px'}}> Men's Clothing</div>
          </div>
         </button>
         <button className="catogrybtns"   > 
          <div className="flexContainer" style={{display:'flex'}}>
            <div className="flexutemleft" style={{marginLeft:'40px'}}><img src={circuit} alt="" /></div>
            <div className="flexutemright" style={{marginLeft:'20px'}}> Consumer Electronics</div>
          </div>
         </button>
       

      </div>
        </div>
          <div className="col-md-3">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                  style={{color:"black"}}
                ></li>
                <li
                  data-target="#demo"
                  data-slide-to="1"
                  style={{color:"black"}}
                ></li>
                <li
                  data-target="#demo"
                  data-slide-to="2"
                  style={{color:"black"}}
                ></li>
                  <li
                  data-target="#demo"
                  data-slide-to="3"
                  style={{color:"black"}}
                ></li>
                  <li
                  data-target="#demo"
                  data-slide-to="4"
                  style={{color:"black"}}
                ></li>
                 <li
                  data-target="#demo"
                  data-slide-to="5"
                  style={{color:"black"}}
                ></li>
              </ul>

              <div className="carousel-inner" style={{width:"63rem"}}>
                <div className="carousel-item active">
                  <img src={ecomerce} alt="Los Angeles" />
                </div>
                <div className="carousel-item">
                  <img src={ecomerce} alt="Chicago" />
                </div>
                <div className="carousel-item">
                  <img src={ecomerce} alt="New York" />
                </div>
                <div className="carousel-item">
                  <img src={ecomerce} alt="New York" />
                </div>
                <div className="carousel-item">
                  <img src={ecomerce} alt="New York" />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
          <div  id="imagecol" className="col" style={{backgroundColor:'rgba(rgba(0, 0, 0, 0.15))',boxShadow:'4px 5px 8px whitesmoke',borderRadius:'20px',marginLeft:"15rem"}}>
            <div className="col" >
              <div align="center" className="row" style={{paddingTop:'20px',gap:'20px'}} >
                <div className="col" >
                  <img src={freestore} /><br />
                  <div className="div" style={{}}>free Shipping</div>
                </div> 
                <div className="col" >
                  <img src={freeshipping} /><br />
                  <div className="div" >free Shipping</div>
                </div>
                <div className="w-100"></div><br />

                <div className="col" >
                  <img  src={acadamy} /><br />
                  <div className="div" >free Shipping</div>
                </div>
                <div className="col">
                  <img src={fullfillment} /><br />
                  <div className="div" >free Shipping</div>
                </div>
                <br />
                <div className="w-100"></div>
                <div className="col">
                  <img src={odm} /><br />
                  <div className="div" >free Shipping</div>
                </div>
                <div className="col">
                  <img src={video} /><br />
                  <div className="div" >free Shipping</div>
                </div>
               
              </div>
              <br />
              <div className="row" style={{borderRadius:'20px',outlineColor:'rgba(253, 231, 54, 1)',outline:'20px'}}>
                <div className="box" style={box}>
                </div>
              </div>
            </div>
          </div>
         
          {/* <div id="delivery" className="col">
            <div className="row" style={{display:'flex'}}>
              <div className="col" style={delivery}>Delivery Time</div>
              <div className="col"><button style={shiiping}>Shipping calculation</button></div>
            </div>
            <div className="row">
              <div className="col" style={order}>Order 155***267 placed by ***ch has been delivered for a period of 25 days from to .
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    
  
   
  </>
  );
}

export default Section;
