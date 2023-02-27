import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

import './Listed.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from '@headlessui/react';

function Listed() {

const  productbtn={
    backgroundColor:'transparent',
    borderColor:'transparent',
    padding:'5px',
    
}
const Search={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    padding:'5px',
    width:'100px',
    borderRadius:'10px'

}
const Product={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    padding:'5px',
    width:'150px',
    borderRadius:'10px'  
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
    <div>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2' style={{backgroundColor:'#31343A'}}>
                <Sidebar />
            </div>
            <div className='col-10'>
                <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
                <div className='headingAll'><h2>Listing</h2></div>
                    <Tab.Group>
                    <div className='conatiner' style={buttonheader}>

                    <Tab.List className='tablist' >
                                
                                <Tab  className='tabbtn'>Listed</Tab>
                                <Tab className='tabbtn'>On Listing</Tab>
                                <Tab className='tabbtn'>Queue</Tab>
                                <Tab className='tabbtn'>Listing Failed</Tab>
                            </Tab.List>
                        </div>
                            
                        
                        
                        <Tab.Panels style={tabpanls}>
                            <Tab.Panel>
                            <div className='Dashboardheading'><h3>Listed</h3></div>
                            <div className='row' style={{marginTop:'20px'}}>
                                            <div className='col'><select  style={{width:'350px',outline:'#FDE31A'}} name="AllStores" id="AllStores">
                                                <option value="AllStores">All Stores</option>
                                                <option value="AllStores">#lknn</option>
                                                <option value="AllStores">#nlknnl</option>
                                                </select></div>
                                            <div className='col'><input style={{width:'300px',outline:'#FDE31A'}} placeholder='Enter SKU/Product name' type="text" name="" id="" /></div>
                                            <div className='col'><button style={Search}>Search</button></div>
                                        </div>
                                        <div className='row' style={{marginTop:'20px',backgroundColor:'#FFD600',padding:'10px'}}>
                                            <div className='col'><button style={productbtn}>Products</button></div>
                                            <div className='col'><button  style={productbtn}>Store Name</button></div>
                                            <div className='col'><button  style={productbtn}>Price</button></div>
                                            <div className='col'><button  style={productbtn}>Weight</button></div>
                                            <div className='col'><button  style={productbtn}>Shipping From</button></div>
                                            <div className='col'><button  style={productbtn}>Shippping Method</button></div>
                                            <div className='col'><button  style={productbtn}>Shippping Cost</button></div>
                                            <div className='col'><button  style={productbtn}>Amount</button></div>
                                            <div className='col'><button  style={productbtn}>Action</button></div>
                                        </div>
                                        <div className='row' style={{marginLeft:'450px',marginTop:'100px'}}>
                                            <div><button  style={Product}>Add Products</button></div>
                                        </div>
                            </Tab.Panel>
                            <Tab.Panel>
                            <div className='Dashboardheading'><h3>On Listing</h3></div>
                            <div className='row' style={{marginTop:'20px'}}>
                                            <div className='col'><select  style={{width:'350px',outline:'#FDE31A'}} name="AllStores" id="AllStores">
                                                <option value="AllStores">All Stores</option>
                                                <option value="AllStores">#lknn</option>
                                                <option value="AllStores">#nlknnl</option>
                                                </select></div>
                                            <div className='col'><input style={{width:'300px',outline:'#FDE31A'}} placeholder='Enter SKU/Product name' type="text" name="" id="" /></div>
                                            <div className='col'><button style={Search}>Search</button></div>
                                        </div>
                                        <div className='row' style={{marginTop:'20px',backgroundColor:'#FFD600',padding:'10px'}}>
                                            <div className='col'><button style={productbtn}>Products</button></div>
                                            <div className='col'><button  style={productbtn}>Store Name</button></div>
                                            <div className='col'><button  style={productbtn}>Price</button></div>
                                            <div className='col'><button  style={productbtn}>Shipping From</button></div>
                                            <div className='col'><button  style={productbtn}>Shippping Method</button></div>
                                            <div className='col'><button  style={productbtn}>Status</button></div>
                                            
                                        </div>
                                        <div className='row' style={{marginLeft:'450px',marginTop:'100px'}}>
                                            <div><button  style={Product}>Add Products</button></div>
                                        </div>
                            </Tab.Panel>
                            <Tab.Panel>
                            <div className='Dashboardheading'><h3>Queue</h3></div>
                                <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'5px'}}>
                                        <div className='col'>
                                    <p> <span ><input type="checkbox" /></span> Products</p>
                                        </div>
                                        <div className='col' style={{color:'black'}}>Price</div>
                                        <div className='col' style={{color:'black'}}>Action</div>
                                    </div>
                            </Tab.Panel>
                            <Tab.Panel>
                            <div className='Dashboardheading'><h3>Listing Failed</h3></div>
                            <div className='row' style={{marginTop:'20px'}}>
                                            <div className='col'><select  style={{width:'350px',outline:'#FDE31A'}} name="AllStores" id="AllStores">
                                                <option value="AllStores">All Stores</option>
                                                <option value="AllStores">#lknn</option>
                                                <option value="AllStores">#nlknnl</option>
                                                </select></div>
                                            <div className='col'><input style={{width:'300px',outline:'#FDE31A'}} placeholder='Enter SKU/Product name' type="text" name="" id="" /></div>
                                            <div className='col'><button style={Search}>Search</button></div>
                                        </div>
                                        <div className='row' style={{marginTop:'20px',backgroundColor:'#FFD600',padding:'10px'}}>
                                            <div className='col'><button style={productbtn}>Products</button></div>
                                            <div className='col'><button  style={productbtn}>Store Name</button></div>
                                            <div className='col'><button  style={productbtn}>Price</button></div>
                                            <div className='col'><button  style={productbtn}>Shipping from</button></div>
                                            <div className='col'><button  style={productbtn}>Shipping Method</button></div>
                                            <div className='col'><button  style={productbtn}>Status</button></div>
                                        </div>
                                        <div className='row' style={{marginLeft:'450px',marginTop:'100px'}}>
                                            <div><button  style={Product}>Add Products</button></div>
                                        </div>
                            </Tab.Panel>
                        </Tab.Panels>
                        
                    </Tab.Group>
                </div>  
            <div>
            
            </div>
            </div>
        </div>
       
      </div>

  )
}

export default Listed
