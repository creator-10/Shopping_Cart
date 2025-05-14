import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router' 
import './header.css'

function Header() {

  const cartItems=useSelector(state=>state.cart.items)
  const totalCount=cartItems.length
  return (
    <>
    
     <nav>
    <div className='logo'>
        <img src='./src/assets/logo.png' alt="Website logo"></img>
    </div>
    <div className='nav-items'>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/">Category</Link></li>
          <li><Link to="/">About us</Link></li>
           <li><Link to="/cart">Cart({totalCount})</Link></li>
           <li><Link to="/">Login</Link></li>
        </ul>
    </div>
     </nav>
    
    </>
  )
}

export default Header
