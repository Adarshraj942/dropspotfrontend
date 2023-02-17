import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Adminnavbar from '../Adminnavbar/Adminnavbar'

function Purchaselisting() {
const addonbtn={
    backgroundColor:'#FDE31A',
    borderColor:'transparent',
    padding:'10px',
    borderRadius:'10px',
    width:'200px',
    fontWeight:'400',
    fontSize:'15px'

}

const  selectbox={
   width:'250px' ,
   height:'30px',
   borderColor:'#FDE31A'
}

const inputrow={
  width:'500px',
  marginTop:'20px',
  color:'black',
  borderColor:'#FDE31A',
  fontSize:'15px',
  fontWeight:'400', 
}

const searchbtn={
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  padding:'10px',
  borderRadius:'10px',
  width:'150px',
  fontWeight:'400',
  fontSize:'15px'
}
const Clearbtn={
  backgroundColor:'#FDE31A',
  borderColor:'transparent',
  padding:'10px',
  borderRadius:'10px',
  width:'150px',
  fontWeight:'400',
  fontSize:'15px'
}
const btnroe={
  borderColor:'transparent',
  backgroundColor:'transparent',
  fontWeight:'400',
  fontSize:'15px'
}

const inputdate={
  width:'150px',
  marginTop:'20px',
  color:'black',
  borderColor:'#FDE31A',
  fontSize:'15px',
  fontWeight:'400',
}
  return (
    <div>
        <Adminnavbar />
      <div className='row'>
        <div className='col-2'><Sidebar /></div>
        <div className='col-10'>
            <div className='container'>
                <div className='row' style={{justifyContent:'space-between',display:'flex',marginTop:'20px'}}>
                    <div className='col' style={{justifyContent:'left'}}> <h3>Purchase List</h3> </div>
                    <div className='col' style={{justifyContent:'right'}}> <button style={addonbtn}>Add To Purchase</button><span style={{margin:'30px'}} ><button style={addonbtn}>Purchase cart</button></span> </div>
                </div>
                <div className='row' style={{marginTop:'20px'}} >
                    <div className='col'  >
                    <select style={selectbox} name="Select box" id="box">
                    <option value="">Please select order type</option>
                    <option value="">All</option>
                    </select>
                    </div>
                    <div className='col' >
                        <select  style={selectbox} name="Select box" id="box">
                        <option value="">Please select order status</option>
                        <option value="">All</option>
                        </select> 
                    </div>
                    <div className='col'>
                        <select  style={selectbox} name="Select box" id="box">
                        <option value="">All</option>
                        <option value="">All</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                  <div className='col-4'><p><input style={inputdate}  placeholder='Start' type="date" /><span><input style={inputdate} placeholder='End' type="date" /></span></p></div>
                  <div className='col-8'><input style={inputrow} placeholder='Enter Order Number/Transaction Number /SKU/Product Name ' type="text" /></div>
                </div>
                <div className='row'>
                <h6><button style={searchbtn}>Search</button><span style={{marginLeft:'10px'}} ><button style={Clearbtn}>Clear</button></span></h6>
                </div>
            </div>
            <div className='row' style={{marginTop:'20px',backgroundColor:'#FDE31A',padding:'10px',color:'black'}}>
              <div className='col'>Products</div>
              <div className='col'><button style={btnroe}>Varient</button></div>
              <div className='col'><button style={btnroe}>Weight(g)</button></div>
              <div className='col'><button style={btnroe}>Price</button></div>
              <div className='col'><button style={btnroe}>Quantity</button></div>
              <div className='col'><button style={btnroe}>Supplier</button></div>
              <div className='col'><button style={btnroe}>Status</button></div>
              <div className='col'><button style={btnroe}>Type</button></div>
              <div className='col'><button style={btnroe}>Tracking Number</button></div>
              <div className='col'><button style={btnroe}>Action</button></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Purchaselisting
