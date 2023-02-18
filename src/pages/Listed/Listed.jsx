import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

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
  return (
    <div>
        <Adminnavbar />
        <div className='row'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
            <div className='row'>
                <div className='col'>
                <div>
                <div style={{ display: 'block', width: 'auto' }}>
                    
                    <Tabs defaultActiveKey="first" style={{backgroundColor:'rgba(255, 214, 0, 1)'}}>
                        <Tab eventKey="first" title="Listed">
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
                        </Tab>
                        <Tab eventKey="second" title="On Listing">
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
                        </Tab>

                        <Tab eventKey="third" title="Queue">
                       <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'5px'}}>
                        <div className='col'>
                      <p> <span ><input type="checkbox" /></span> Products</p>
                        </div>
                        <div className='col' style={{color:'black'}}>Price</div>
                        <div className='col' style={{color:'black'}}>Action</div>
                       </div>
                        </Tab>

                        <Tab eventKey="fourth" title="Listing Failed">
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
                        </Tab>
                    </Tabs>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        </div>
      </div>

  )
}

export default Listed
