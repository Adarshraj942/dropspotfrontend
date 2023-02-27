import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from '@headlessui/react';

import './Myinventry.css'
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../Api/ProductRequest';


function Myinventry() {

  

const btnrow={
  backgroundColor:'transparent',
  borderColor:'transparent',
  padding:'10px',
  fontWeight:'400',
  fontSize:'15px',
  color:'black'
}

const skubnt={
  width:'300px',
  height:'35px',
  borderColor:'transparent',

  borderRadius: '86px',
  backgroundColor:'rgba(231, 231, 231, 1)',
  color: 'rgba(50, 51, 58, 1)',
  fontSize: '15px',
  paddingLeft: '20px',
  outlineColor:'transparent', 
}


const buttonheader={
  backgroundColor:'#FDE31A',
  borderRadius:'15px',
  borderColor:'transparent',
  width:'auto',
  alignItems:'center',
  height:'80px',
  alignSelf:'center'
  
}

const tabpanls={
  padding:'30px',

}

const tranferbtn={
  backgroundColor:'#FFE51A',
  borderColor:'transparent',
  padding:'5px',
  borderRadius:'10px'
}
const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);

useEffect(() => {
  async function fetchData() {
    // You can await here
    const {data}=await getAllProducts()
    setUsers(data)
    setFilteredUsers(data)
    
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state

useEffect(()=>{
  const result=users.filter((user)=>{
      return user.firstname.toLowerCase().match(search.toLowerCase());
      
  })
  setFilteredUsers(result)
},[search])

const coloumn=[
  {name:"NAME",selector:(row)=>row.name,style: {
      color: "gray",
      }},
      {name:"Id",selector:(row)=>row._id,style: {
        color: "gray",
        }},
        {name:"Price",selector:(row)=>row.price,style: {
          color: "gray",
          }},
  {name:"Quantity",selector:(row)=>row.quantity,style: {
      color: "gray",
      }},
  {name:"ACTION ",selector:(row)=>
  <div style={{display:"flex" }}>

    {<>
      <button className='button' style={{background:"blue",color:"white",marginLeft:"5px",padding:"10px"}}
      onClick={()=>alert()}
      >Edit</button> <button className='button' style={{background:"red",color:"white",marginLeft:"5px", padding:"10px"}}
      onClick={()=>alert()}
      >Delete</button>
    </>}
            
           
       </div>
     
      },
            
]
  return (
    <div>
      <Adminnavbar />
      <div className='row'>
        <div className='col-2' style={{backgroundColor:'#31343A'}}><Sidebar /></div>
        <div className='col-10' >
        
        <div className='container' id="tabcontainer" style={{margin:'20px 0px 20px 10px',width:'1100px', padding:'20px',}}>
        <div className='headingAll'><h2>My Inventory</h2></div>
      <Tab.Group >
      <div className='conatiner' style={buttonheader}>
      <Tab.List className='tablist' defaultChecked="white" >
                
                <Tab  className='tabbtn'>Product Inventory</Tab>
                <Tab className='tabbtn'>Connecting Packaging Inventory</Tab>
                <Tab className='tabbtn'>Deposit Inventory</Tab>
              </Tab.List>
         </div>
          <Tab.Panels style={tabpanls}>
            <Tab.Panel 
            >
           
            <div className='container' >
            <div className='Dashboardheading'><h3>Product Inventory</h3></div>
                  <div className='row' style={{marginTop:'20px'}}>
                    <div className='col-6'>
                    <div className='buttonIn'></div><input style={skubnt}  placeholder='Enter Product SKU'  type="text" name="" id="" /> <button id="serachbtn"  value={search}     
            onChange={
                (e)=>
                   setSearch(e.target.value)
                
            }>Search</button>
                    </div>
                    <div className='col-3'>
                    <p> Total Value:<span style={{margin:'10px'}} ><input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                    
                    </div>
                    <div className='col-3'>
                  <button style= {tranferbtn}>Transfer record</button>
                    
                    </div>
                  
                  </div>
                  </div>
                 <div className='container' style={{padding:'10px'}}>
                 <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px',boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",borderRadius:'10px',}}>
                    <div className='col'><button style={btnrow}>Name</button></div>
                    <div className='col'><button style={btnrow}>Id</button></div>
                    <div className='col'><button style={btnrow}>Price</button></div>
                    <div className='col'><button style={btnrow}>Quantity</button></div>
                    <div className='col'><button style={btnrow}>Action</button></div>

                  </div>
                  <DataTable 
        
                    columns={coloumn} 
                    data={filterUsers} 
                    pagination
                  
                    style={{color:"red",backgroundColor:'rgba(255, 214, 0, 1)'}}
                    highlightOnHover
                  
                    
                  
                    // data={data}
                  />

                 </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='row' >
            <div className='Dashboardheading'><h3>Connecting Pacakaging Inventory</h3></div>
                    <div className='col-6'>
                    <div className='buttonIn'></div><input style={skubnt} placeholder='Enter Product SKU'  type="text" name="" id="" /> <button id="serachbtn">Search</button>
                    </div>
                    
                    <div className='col-6'>
                    <p> Total Value ($): $0<span style={{margin:'15px'}} > Replenishment Quantity : 0 <input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                    </div>
                </div>
            </Tab.Panel>
            <Tab.Panel>
            <div className='Dashboardheading'><h3>Deposit Inventory</h3></div>
            <div className='row' style={{marginTop:'20px'}}>
                <div className='col'><input style={skubnt} placeholder='Please enter the order number' type="text" /></div>
                <div className='col'> <input style={skubnt} placeholder='Please enter SKU' type="text" /> </div>
                <div className='col'><p> <button id='btnserach'>Search</button><span style={{margin:'10px'}} > <button id='btnserach'>Clear</button> </span></p></div>
              </div>
              <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',pading:'10px'}}>
                    <div className='col'><button style={btnrow}>Products</button></div>
                    <div className='col'><button style={btnrow}>Available(Total)</button></div>
                    <div className='col'><button style={btnrow}>Occupied(Total)</button></div>
                    <div className='col'><button style={btnrow}>Used (Total) </button></div>
                    <div className='col'><button style={btnrow}>Stocked(Total)</button></div>
                  
                </div>
            </Tab.Panel>
          </Tab.Panels>
    </Tab.Group>
      </div> 

        </div>
      </div>
 
    </div>
  )
}

export default Myinventry