import React from 'react'

import etc from '../../assets/etc.png'
import WIX from '../../assets/WIX.png'
import ish from '../../assets/ish.png'
import wcom from '../../assets/wcom.png'

import d2c from '../../assets/d2c.png'
import shop from '../../assets/shop.png'
import magento from '../../assets/magento.png'
import bigcomerce from '../../assets/bigecomerce.png'


function ShoppingCard() {
  return (
   <div>
    <div className='container-fluid'>
        <div align="center" className='row' style={{paddingTop:'40px'}}>
            <div className='col'><img src={etc} alt="" /></div>
            <div className='col'><img src={WIX} alt="" /></div>
            <div className='col'><img src={ish} alt="" /></div>
            <div className='col'><img src={wcom} alt="" /></div>
        </div>
        <div  align="center"  className='row'>
            <div className='col'><img src={d2c} alt="" /></div>
            <div className='col'><img src={shop} alt="" /></div>
            <div className='col'><img src={magento} alt="" /></div>
            <div className='col'><img src={bigcomerce} alt="" /></div>
        </div>
    </div>
   </div>
  )
}

export default ShoppingCard