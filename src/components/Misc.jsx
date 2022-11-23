import React from 'react'
import {BsMouse} from 'react-icons/bs'
import logo from '../assets/logo.png'

const Misc = () => {
  return (
   <>
   {/* <div className="cursor">
   </div> */}
    <a href="/" className='logo'>
        <img src={logo} alt="Logo" />

    </a>
    <a href="/franchise" className='Franchise'>
   GET A FRANCHISE
    </a>
    <BsMouse className="mouseBtn"/>
   </>
  )
}

export default Misc