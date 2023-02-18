import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useEffect, useState } from 'react';
import 'react-js-dialog-box/dist/index.css';
import DataTable from 'react-data-table-component';
import { getWishlist } from '../../Api/WishlistRoute';
import { useHistory } from 'react-router-dom';
function Wishlist() {

  const smtbtn={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
   
    width:'100px',
    borderTopRightRadius:'10px',
    borderBottomRightRadius:'10px'
  }

  const btns={
    backgroundColor:'transparent',
    borderColor:'transparent',
   

  }
  const btnmovesecond={
    width:'120px',
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    borderRadius:'5px'
  }
  const btnmove={
    backgroundColor:'#FFE51A',
    borderColor:'transparent',
    padding:'5px',
    width:'100px',
    borderRadius:'10px'
  }
  
  const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);
  const userData=localStorage.getItem('userId')

  const history=useHistory()
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const beta={userId:userData}
      const {data}=await getWishlist(beta)
      setUsers(data)
      setFilteredUsers(data.Wishlist.products)
      console.log(userData);
      console.log(data.Wishlist.products);
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

 
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      history.push("/wishlist");
     
    } else {
      history.push("/signin");
    }
  }, []);
  const coloumn=[
    {name:"product",selector:(row)=>row.product,style: {
        color: "gray",
        }},
    {name:"Quantity",selector:(row)=>row.quantity,style: {
        color: "gray",
        }},
    {name:"ACTION ",selector:(row)=>
    <div style={{display:"flex" }}>
  
      {<>
        <button className='button' style={{background:"blue",color:"white",marginLeft:"5px",padding:"10px"}}
        onClick={  ()=>{history.push(`/ProductPage/${row.product}`)}}
        >View </button>
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
  

      <Tabs defaultActiveKey="first" style={{backgroundColor:'rgba(255, 214, 0, 1)'}}>

        <Tab  eventKey="first"  title="Wishlist">
          <div className='row' style={{marginTop:'20px'}}>
            <div className='col-4'>
             <p><label htmlFor="">Catagory</label>: 
             <span>
              <select name="All" id="" style={{width:'250px',outline:'#FFE51A',borderColor:'#FFE51A'}}>
                <option value="All">All</option>
                <option value="All">Sports & Outdoor</option>
              </select>
              </span></p> 
            </div>
            <div className='col-4'>
              <p><input style={{width:'250px',outline:'#FFE51A',borderColor:'#FFE51A',color:'black'}} placeholder='Enter SKU/Product Name' type="text" /><span><button style={smtbtn}>Serach</button></span></p>
            </div>
            <div className='col-2'>
              <button style={btnmove}>Move btn</button>
            </div>
            <div className='col-2'>
              <button    style={btnmovesecond}>Create folder</button>
        
          
            </div>
          </div>
          <div className='row' style={{marginTop:'20px',backgroundColor:'#FFE51A',padding:'5px'}}>
            <div className='col'> <input type="checkbox" /></div>
            <div className='col'><button style={btns}>Date</button></div>
            <div className='col'><button  style={btns}>Images</button></div>
            <div className='col'><button  style={btns}>Title</button></div>
            <div className='col'><button  style={btns}>Product Price</button></div>
            <div className='col'><button  style={btns}>Actions</button></div>
          </div>
        </Tab>
        
      </Tabs>
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

export default Wishlist
