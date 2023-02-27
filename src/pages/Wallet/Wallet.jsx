import React from 'react'
import './Wallet.css'
import icon from '../../assets/coin.png'

const Wallet = () => {
  return (
    <div>
<div className='row' id='walletrow'>
  <div className='col-4'><h4>Account Balance</h4></div>
  <div className='col-4'><input className='inputtext' type="text" /></div>
  <div className='col-4'><button className='withdrawbtn'>withdraw</button></div>
</div>
<div className='row' id='walletrow'>
  <div className='col'>
    <div align='center'>
    <div><h6>Pending</h6></div>
    <div><input className='walletinput' type="text" /></div>
    </div>
  </div>
  <div className='col'>
  <div align='center'>
    <div><h6>Frozen</h6></div>
    <div><input className='walletinput' type="text" /></div>
    </div>
  </div>
  <div className='col'>
    <div align='center'>
      <div><h6>Withdrawable</h6></div>
      <div><input className='walletinput' type="text" /></div>
      </div>
  </div>
  <div className='col'>
    <div align='center'>
      <div><h6>Deposit</h6></div>
      <div><input className='walletinput' type="text" /></div>
      </div>
  </div>

</div>
<div>
  <div className='flexitems'>
    <div className='flexleft'>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-2'></div>
      </div>
      </div>
    <div className='flexright'>
      <img src={icon} alt="" />
    </div>

  </div>
</div>
    </div>
  )
}

export default Wallet
