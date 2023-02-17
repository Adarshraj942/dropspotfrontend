import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import Sidebar from '../Sidebar/Sidebar'

function MyPhotography() {
  return (
    <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2'><Sidebar /></div>
        <div className='col-10'>
        <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Photography Orders">
          Hii, I am 1st tab content
        </Tab>
        <Tab eventKey="second" title="Photography Requests">
    
        </Tab>
        
      </Tabs>
        </div>
      </div>
    </div>
  )
}

export default MyPhotography
