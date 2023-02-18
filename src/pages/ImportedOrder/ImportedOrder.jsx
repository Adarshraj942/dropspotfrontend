import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function ImportedOrder() {

const serachbtn={
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  padding:'5px',
  width:'100px',
  borderRadius:'5px',
  fontSize:'15px',
  fontWeight:'400'
}

const box={
  width:'300px',
  borderColor:'#FDE31A',
  outline:'#FDE31A',
  borderRadius:'20px'
}
  return (
    <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2'><Sidebar /></div>
        <div className='col-10'>
        <Tabs defaultActiveKey="first"style={{backgroundColor:'rgba(255, 214, 0, 1)'}} >
        <Tab eventKey="first" title="Orders(0)" >
          <div className='row' style={{marginTop:'20px'}}>
            <div className='col'>
              <select style={box} name="name" id="value">
                <option value="">Your Order Time</option>
                <option value="">Your Order Time</option>
                <option value="">CJ Time</option>
              </select>
              </div>
            <div className='col'><input type="date" /></div>
            <div className='col'>
              <select style={box} name="name" id="value">
                <option value="">Select a Shipping method</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>
          </div>
          <div className='row'  style={{marginTop:'20px'}}>
            <div className='col'><input style={box} type="text" placeholder='Please enter the name' /></div>
            <div className='col'><input style={box} type="text" placeholder='Please enter the product title' /></div>
            <div className='col'><input style={box} type="text" placeholder='Please enter SKU' /></div>
          </div>
          <div className='row'  style={{marginTop:'20px'}}>
            <div className='col'><input style={box} type="text" placeholder='Please enter order number' /></div>
            <div className='col'><input style={box} type="text"  placeholder='Abnormal Orders' /></div>
            <div className='col'><p><span style={{margin:'10px'}}><button style={serachbtn}>Search</button></span><button style={serachbtn}>Clear</button></p></div>
          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px'}}>
            <div className='col'><p>Your Order No. <span>
            <select  name="name" id="value" style={{width:'20px'}}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
              </span></p></div>
            <div className='col'><p>Your Order Time</p></div>
            <div className='col'>
            <p>Cost 
            <span style={{margin:'1px'}}>
              <select name="" id="" style={{width:'100px',borderRadius:'20px',outlineColor:'#FDE31A',}}>
                  <option value="">All Warehouses</option>
                  <option value="">All Warehouses</option>
                  <option value="">All Warehouses</option>
                  <option value="">All Warehouses</option>
                </select>
            </span> 
              </p>
            </div>
           
            <div className='col'>
            <select name="" id="">
                <option value="">All Countries</option>
                
              </select>
            </div>
            <div className='col'>
              <select name="" id="">
              <option value="">All</option>
                <option value="">All</option>
                <option value="">All</option>
              </select>
   
            </div>
            <div className='col'>
            <p>Remark</p>
            </div>
            <div className='col'>
            <p>Action</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="Invalid Orders(0)">
          Hii, I am 2nd tab content
        </Tab>
        <Tab eventKey="third" title="Trash(0)">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ImportedOrder
