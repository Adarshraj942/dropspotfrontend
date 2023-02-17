import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
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
        <div className='col-2'><Sidebar /></div>
        <div className='col-10'>
         
          <div style={{ display: 'block', width:'auto',color:'black'}}>
          <Tabs defaultActiveKey="third" className='col-10' style={{width:'1140px',color:'black'}}>
            <Tab eventKey="first" title="Product Inventory" style={{width:'1140px',color:'black',textDecoration:'none'}} >
              <div className='row' style={{marginTop:'20px'}}>
                <div className='col-6'>
                <div className='buttonIn'></div><input placeholder='Enter Product SKU' style={{width:'450px',borderColor:'#FFE51A',outline:'#FFE51A'}} type="text" name="" id="" /> <button id="serachbtn">Search</button>
                </div>
                <div className='col-4'>
                <p> Total Value:<span style={{margin:'10px'}} ><input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                 
                </div>
                <div className='col-2'>
               <button style= {tranferbtn}>Transfer record</button>
                 
                </div>
               
              </div>
              <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',pading:'10px'}}>
                <div className='col'><button style={btnrow}>Images</button></div>
                <div className='col'><button style={btnrow}>Products</button></div>
                <div className='col'><button style={btnrow}>SKU</button></div>
                <div className='col'><button style={btnrow}>Inventory <span align="center">CN US-E US-W TH DE ID PL</span></button></div>
                <div className='col'><button style={btnrow}>Value</button></div>
                <div className='col'><button style={btnrow}>Record</button></div>
              </div>
            </Tab>
            <Tab eventKey="second" title="Connecting Packaging Inventory" style={{width:'1230px',color:'black',textDecoration:'none'}}>
            <div className='row' style={{marginTop:'20px'}}>
                <div className='col'>
                <div className='buttonIn'></div><input placeholder='Enter Product SKU' style={{width:'450px',borderColor:'#FFE51A',outline:'#FFE51A'}} type="text" name="" id="" /> <button id="serachbtn">Search</button>
                </div>
                
                <div className='col'>
                <p> Total Value ($): $0<span style={{margin:'15px'}} > Replenishment Quantity : 0 <input type="checkbox" name="" id="" /></span> Product In Stock .</p>
                </div>
            </div>
                
                
               
           
              
            </Tab>
            <Tab eventKey="third" title="Deposit Inventory" style={{width:'1140px',color:'black'}}>
           <div className='row' style={{marginTop:'20px'}}>
            <div className='col'><input style={{width:'350px',borderColor:'#FFE51A',outline:'#FFE51A'}} placeholder='Please enter the order number' type="text" /></div>
            <div className='col'> <input style={{width:'350px',borderColor:'#FFE51A',outline:'#FFE51A'}} placeholder='Please enter SKU' type="text" /> </div>
            <div className='col'><p> <button id='btnserach'>Search</button><span style={{margin:'10px'}} > <button id='btnserach'>Clear</button> </span></p></div>
           </div>
           <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',pading:'10px'}}>
                <div className='col'><button style={btnrow}>Products</button></div>
                <div className='col'><button style={btnrow}>Available(Total)</button></div>
                <div className='col'><button style={btnrow}>Occupied(Total)</button></div>
                <div className='col'><button style={btnrow}>Used (Total) </button></div>
                <div className='col'><button style={btnrow}>Stocked(Total)</button></div>
               
            </div>
            </Tab>
          </Tabs>
          </div>
          <DataTable 
        
        columns={coloumn} 
        data={filterUsers} 
        pagination
        fixedHeader
        style={{color:"red"}}
        highlightOnHover
        subHeader
        subHeaderComponent={
            <input type="text" placeholder='SEARCH... ' 
            style={{width:"40%",height:"2rem" ,borderColor:"var(--hrColor)",color:"orangered"}}
            value={search}
            onChange={
                (e)=>
                   setSearch(e.target.value)
                
            }/>
        }
        subHeaderAlign="center"
        // data={data}
      />  
        </div>
      </div>
     

     
    </div>
  )
}

export default Myinventry