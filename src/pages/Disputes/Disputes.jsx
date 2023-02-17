import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Disputes = () => {
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

      const boxrim={
        width:'100px',
        borderColor:'#FDE31A',
        outline:'#FDE31A',
        borderRadius:'20px'  
      }
      const boxnim={
        width:'100px',
        borderColor:'#FDE31A',
        outline:'#FDE31A',
        borderRadius:'20px'  
      }
  return (
    <div>
          <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2'><Sidebar /></div>
        <div className='col-10'>
        <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Awaiting Response">
                 
        <div className='row'  style={{marginTop:'20px'}}>
            <div className='col-2'><input type="date" style={boxrim}  placeholder='Please enter order number' /></div>
            <div className='col-2'><input type="date" style={boxnim}   placeholder='Abnormal Orders' /></div>
            <div className='col-8'><input type="text" style={box}   placeholder='Abnormal Orders' /><button style={serachbtn}>Search</button></div>
            <div className='col-2'><select  name="name" id="value" style={{width:'100px',outline:'transparent'}}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px'}}>
            <div className='col'><p> Order Number</p></div>
            <div className='col'><p> Order Number</p></div>
            <div className='col'>
            <p>Tracking Number</p>
            </div>
            <div className='col'><p>Tracking Number</p></div>
            <div className='col'><p>Dispute Reason</p></div>
            <div className='col'>
            <p>Expected Solution</p>
            </div>
            <div className='col'>
            <p>Created Date</p>
            </div>
            <div className='col'>
            <p>Action</p>
            </div>
            <div classname="col">
                <p>Status</p>
            </div>
          </div> 

       
        </Tab>
        <Tab eventKey="second" title="Completed">
                 
        <div className='row'  style={{marginTop:'20px'}}>
            <div className='col-2'><input type="date" style={boxrim}  placeholder='Please enter order number' /></div>
            <div className='col-2'><input type="date" style={boxnim}   placeholder='Abnormal Orders' /></div>
            <div className='col-8'><input type="text" style={box}   placeholder='Abnormal Orders' /><button style={serachbtn}>Search</button></div>
            <div className='col-2'><select  name="name" id="value" style={{width:'100px',outline:'transparent'}}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px'}}>
            <div className='col'><p> Order Number</p></div>
            <div className='col'><p> Order Number</p></div>
            <div className='col'>
            <p>Tracking Number</p>
            </div>
            <div className='col'><p>Tracking Number</p></div>
            <div className='col'><p>Dispute Reason</p></div>
            <div className='col'>
            <p>Expected Solution</p>
            </div>
            <div className='col'>
            <p>Created Date</p>
            </div>
            <div className='col'>
            <p>Action</p>
            </div>
            <div classname="col">
                <p>Status</p>
            </div>
          </div>
        </Tab>
        <Tab eventKey="third" title="Closed">
                        
        <div className='row'  style={{marginTop:'20px'}}>
            <div className='col-2'><input type="date" style={boxrim}  placeholder='Please enter order number' /></div>
            <div className='col-2'><input type="date" style={boxnim}   placeholder='Abnormal Orders' /></div>
            <div className='col-8'><input type="text" style={box}   placeholder='Abnormal Orders' /><button style={serachbtn}>Search</button></div>
            <div className='col-2'><select  name="name" id="value" style={{width:'100px',outline:'transparent'}}>
                <option value="">All</option>
                <option value="">#method</option>
                <option value="">#method</option>
              </select>
            </div>

          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px'}}>
            <div className='col'><p> Order Number</p></div>
            <div className='col'><p> Order Number</p></div>
            <div className='col'>
            <p>Tracking Number</p>
            </div>
            <div className='col'><p>Tracking Number</p></div>
            <div className='col'><p>Dispute Reason</p></div>
            <div className='col'>
            <p>Expected Solution</p>
            </div>
            <div className='col'>
            <p>Created Date</p>
            </div>
            <div className='col'>
            <p>Action</p>
            </div>
            <div classname="col">
                <p>Status</p>
            </div>
          </div>
        </Tab>
      </Tabs>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Disputes
