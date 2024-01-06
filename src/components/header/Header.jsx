import React from 'react'
import './header.css'
import Logo from '../../assets/alnajah_company_logo.png'

const Header = () => {
  return (
    <div className='header-component'>
    <div>
        <img src={Logo} alt="" className='logo'/>
    </div>
    <div className='heading-content'>
        <p className='call-us'>call us: +971558633113</p>
        <h1>AL NAJAH COMMERCIAL INFORMATION SERVICES</h1>
        <p className='heading-des'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iure dolorem nobis ullam sit illo. Lorem ipsum dolor sit amet consectetur. </p>
        <p className='btn btn-primary contact-btn'>Contact us</p>
    </div>
    </div>

  )
}

export default Header