import React from 'react'
import { useHistory } from "react-router-dom";
import Disputeslist from '../Disputeslist/Disputeslist';
import Myinventry from '../myinventry/Myinventry';
import MyPhotography from '../MyPhotography/MyPhotography';
import OrderTracking from '../OrdersTracking/OrderTracking';
import './Sidebar.css'



function Sidebar() {
const history = useHistory();
const Sourcingpage= () => {
    history.push("Sourcingpage");
        } 
  
const Purchaselisting=()=> {
  history.push('Purchaselisting')
}


 const Myinventry= () => {
          history.push("Myinventry");
} 
const Wishlist= () => {
  history.push("Wishlist");
} 

const MyPhotography= () => {
  history.push("MyPhotography");
} 

const ImportedOrder=()=>{
  history.push('ImportedOrder')
}

const Connection=()=>{
  history.push('Connection')
}

const Listed =()=>{
  history.push('Listed')
}

const OrderFullfillment=()=>{
  history.push('OrderFullfillment')
}

const Dropshiporder=()=>{
  history.push('Dropshiporder')
}
const Disputes=()=>{
  history.push('Disputes')
}
const Disputeslist=()=>{
  history.push('Disputeslist')
}

const UndeleviredOrder=()=>{
  history.push('UndeleviredOrder')
}
const OrderTracking=()=>{
  history.push('OrderTracking')
}
const PurchaseCart=()=>{
  history.push('PurchaseCart')
}
const SkuList=()=>{
  history.push('SkuList')
}
const ServiceProduct=()=>{
  history.push('ServiceProduct')
}

const MyCj =()=>{
  history.push('MyCj')
}
  return (
    <div>
        <div>  
        <div className="container-fluid" id="main" style={{backgroundColor:'#32333A',width:'210px'}}>  
          <div className="row row-offcanvas row-offcanvas-left">  
            <div className="sidebar-offcanvas" id="sidebar" role="navigation">  
              <ul className="flex-column pl-0 mt-3">
              <li className='pl-3' >  
                  <a> <button  onClick={MyCj} className='dropbtnsubmenu'> Dashboard</button></a>  
                 
                </li>  
                <li className="nav-item">  
                  <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1"> <button className='dropbtnsubmenu' >Manage Product</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu1" aria-expanded="false">  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button onClick={Sourcingpage} className='dropbtnsubmenu'> Sourcing </button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button  className='dropbtnsubmenu' onClick={Purchaselisting}>Purchase list</button>  </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button  onClick={Myinventry} className='dropbtnsubmenu'>My inventry</button>  </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button onClick={Wishlist} className='dropbtnsubmenu'>Wishlist</button>  </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link" href>  <button onClick={MyPhotography} className='dropbtnsubmenu'> My Photography</button> </a> </li> 
                  </ul>  
                </li>  
                <li className="nav-item">  
                  <a className="nav-link" href="#submenu2" data-toggle="collapse" data-target="#submenu2"> <button className='dropbtnsubmenu'> Order</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu2" aria-expanded="false">  
                  <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={ImportedOrder}>Imported Orders </button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={OrderFullfillment} > Order Fullfillment</button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Disputes}>Disputes </button> </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Disputeslist}>Disputes 2.0</button>  </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={UndeleviredOrder}> Undeliverable Orders</button> </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={OrderTracking}>Orders Tracking</button>  </a> </li> 
                    
                  </ul>  
                </li>   
                <li className="nav-item">  
                  <a className="nav-link" href="#submenu3" data-toggle="collapse" data-target="#submenu3"> <button className='dropbtnsubmenu'  >Cart</button> </a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu3" aria-expanded="false">  
                  <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Dropshiporder}> Dropship Orders</button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={PurchaseCart} >Purchase Cart</button>  </a> </li>  
                
                  </ul>  
                </li>  
                <li className="nav-item">  
                  <a className="nav-link" href="#submenu3" data-toggle="collapse" data-target="#submenu4"> <button className='dropbtnsubmenu'>Products</button> </a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu4" aria-expanded="false">  
                  <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Connection} >Connection</button>  </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={Listed}>Listed </button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={SkuList} >SKU List</button>  </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link" href> <button className='dropbtnsubmenu' onClick={ServiceProduct} > Service Product</button></a> </li> 
                    
                  </ul>  
                </li> 
                <li className="nav-item">  
                  <a className="nav-link" href="#submenu4" data-toggle="collapse" data-target="#submenu5"><button className='dropbtnsubmenu'> Authentication</button></a>  
                  <ul className="list-unstyled flex-column pl-0 collapse" id="submenu5" aria-expanded="false">  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>Shopify</button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Ebay </button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Etsy</button></a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'> Api</button> </a> </li> 
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>dsfsdffsf</button> </a> </li>  
                    <li className="nav-item pl-3"> <a className="nav-link " href> <button  className='dropbtnsubmenu'>sfdfsfsdf</button>  </a> </li> 
                  </ul>  
                </li>  
              </ul>  
            </div>  
          </div>  
        </div>
      </div>

    
    </div>
  )
}

export default Sidebar

