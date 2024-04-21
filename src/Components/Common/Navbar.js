import React, {useState} from 'react'
import Head from "./Head"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [click, setClick] = useState(false)
  return (
    <div>
      <Head />
      <header>
        <nav className='flexSB'>
            <ul className= { click ? "mobile-nav" : "flexSB"} onClick = {()=> setClick(false)}>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/Policies">Policies</Link></li>
                <li><Link to= "/Community">Community</Link></li>
                <li><Link to= "/Aboutus">About us</Link></li>
                <li><Link to= "/Contactus">Contact us</Link></li>
                <li><Link to= "/Reviews">Reviews</Link></li>
            </ul>
            <div className='start'>
                <div className=' "button'> Log In / Sign Up 

                </div>
            </div>
            <button className='toggle' onClick = {()=> setClick(!click)}>
                {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar