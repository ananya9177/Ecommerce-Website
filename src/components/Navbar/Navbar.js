import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assests/logo.png'
import Cart from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

function Navbar() {

    const [menu,setmenu] = useState('shop')

    const {getTotalCartItems} = useContext(ShopContext)

    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt='logo'/>
           <Link to ='/'  style={{textDecoration:'none'}}> <p>SHOPPER</p> </Link>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setmenu('shop')}><Link  style={{textDecoration:'none'}} to ='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>setmenu('men')}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>setmenu('women')}><Link style={{textDecoration:'none'}} to ='/womens'>Women</Link>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>setmenu('kids')} ><Link style={{textDecoration:'none'}} to ='/kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to ='/loginsignup'> <button>Login</button> </Link>
           <Link to ='/cart'> <img src={Cart} alt='cart'/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
