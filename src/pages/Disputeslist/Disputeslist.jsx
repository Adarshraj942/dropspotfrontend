import React from 'react'

import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Disputeslist = () => {

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
          const clearbtn={
            backgroundColor:'',
            borderColor:'#FDE31A',
            padding:'5px',
            width:'100px',
            borderRadius:'5px',
            fontSize:'15px',
            fontWeight:'400',
            marginLeft:'5px'
          }
      return (
        <div>
            <div>
          <Adminnavbar />
          <div className='row'>
            <div className='col-2'><Sidebar /></div>
            <div className='col-10'>
            <Tabs defaultActiveKey="first" style={{color:'black',backgroundColor:'rgba(255, 214, 0, 1)'}}>
            <Tab eventKey="first" title="All">
                     
            <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={box}   placeholder='Please enter order number' /></div>
                <div className='col-4'><input type="text" style={box}    placeholder='please enter your order number' /></div>
             
    
              </div>
              <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={box}   placeholder='Please enter dispute number' /></div>

                <div className='col-4'><input type="date" style={boxnim}    placeholder='Response' /></div>
                <div className='col-4'>
                  <select  style={box} name="" id="">
                    <option value="">Response</option>
                  </select>
                  </div>
             
    
              </div>
            <div style={{marginTop:'20px'}}>
              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
            </div>
    
           
            </Tab>
            <Tab eventKey="second" title="Pending">
                      
            <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={box}   placeholder='Please enter order number' /></div>
                <div className='col-4'><input type="text" style={box}    placeholder='please enter your order number' /></div>
             
    
              </div>
              <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={box}   placeholder='Please enter dispute number' /></div>

                <div className='col-4'><input type="date" style={boxnim}    placeholder='Response' /></div>
                <div className='col-4'>
                  <select  style={box} name="" id="">
                    <option value="">Response</option>
                  </select>
                  </div>
             
    
              </div>
            <div style={{marginTop:'20px'}}>
              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
            </div>
            </Tab>
            <Tab eventKey="third" title="Awaiting Payment">
                            
                     
            <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={box}   placeholder='Please enter order number' /></div>
                <div className='col-4'><input type="text" style={box}    placeholder='please enter your order number' /></div>
             
    
              </div>
              <div className='row'  style={{marginTop:'20px'}}>
                <div className='col-4'><input type="text" style={box}   placeholder='Please enter dispute number' /></div>

                <div className='col-4'><input type="date" style={boxnim}    placeholder='Response' /></div>
                <div className='col-4'>
                  <select  style={box} name="" id="">
                    <option value="">Response</option>
                  </select>
                  </div>
             
    
              </div>
            <div style={{marginTop:'20px'}}>
              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
            </div>
            </Tab>
            <Tab eventKey="forth" title="Completed">
                            
                     
          <div className='row'  style={{marginTop:'20px'}}>
             <div className='col-4'><input type="text" style={box}   placeholder='Please enter order number' /></div>
            <div className='col-4'><input type="text" style={box}    placeholder='please enter your order number' /></div>
                             
                    
                              </div>
                              <div className='row'  style={{marginTop:'20px'}}>
                                <div className='col-4'><input type="text" style={box}   placeholder='Please enter dispute number' /></div>
                
                                <div className='col-4'><input type="date" style={boxnim}    placeholder='Response' /></div>
                                <div className='col-4'>
                                  <select  style={box} name="" id="">
                                    <option value="">Response</option>
                                  </select>
                                  </div>
                             
                    
                              </div>
                  <div style={{marginTop:'20px'}}>
                    <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
                </div>
            </Tab>
            <Tab eventKey="fifth" title="Canceled">
                            
                     
                            <div className='row'  style={{marginTop:'20px'}}>
                                <div className='col-4'><input type="text" style={box}   placeholder='Please enter order number' /></div>
                                <div className='col-4'><input type="text" style={box}    placeholder='please enter your order number' /></div>
                             
                    
                              </div>
                              <div className='row'  style={{marginTop:'20px'}}>
                                <div className='col-4'><input type="text" style={box}   placeholder='Please enter dispute number' /></div>
                
                                <div className='col-4'><input type="date" style={boxnim}    placeholder='Response' /></div>
                                <div className='col-4'>
                                  <select  style={box} name="" id="">
                                    <option value="">Response</option>
                                  </select>
                                  </div>
                             
                    
                              </div>
                            <div style={{marginTop:'20px'}}>
                              <button style={serachbtn}>serach</button><span><button style={clearbtn}>Clear</button></span>
                            </div>
                            </Tab>
                     
          </Tabs>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Disputeslist
