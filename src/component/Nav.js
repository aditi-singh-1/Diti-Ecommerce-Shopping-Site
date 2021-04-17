import React from 'react'
import {Link, link} from "react-router-dom"
import { HiShoppingCart } from "react-icons/hi";
import {useSelector} from "react-redux";

const Nav = () => {
    const {totalQuantities} =  useSelector(state => state.CartReducer)
    return (
        <div className="nav">
         <div className="continer">
         <div className="nav_container">
         <div className="nav_left">
         <Link to="/"> <img src="/images/logo.jpg" alt="logo"  width="200" height="60" /></Link>
         </div>
         <div className="nav_right">
           <Link to="/cart">
           <div className="basket">
           <span>{totalQuantities}</span>
            <HiShoppingCart className="cart_icon" />
           </div>
            </Link>
         </div>
         </div>
         </div>
        </div>
    )
}

export default Nav

