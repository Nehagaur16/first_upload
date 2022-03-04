import React, { Component } from 'react'
import './style.css';
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import handleCart from './component/reducers/handleCart';
import CartBtn from './component/buttons/CartBtn';

const Header = () => {
       const state = useSelector((state) => state.handleCart);
        return (
            <div className="header-footer">
                <div className="menu">
                            <div className="at-left">
                                <div className="logo">
                                </div>
                            </div>
                            <div className="at-center">
                                <ul class="nav navbar-nav">
                                        <li class="active"><Link to="/">Home</Link></li>
                                        {/*<li><Link to ="/coffeeShop">Coffee Shop</Link></li>*/}
                                        <li><Link to="/products">Products</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/store">Our Stores</Link></li>
                                        <li><Link to="/Signup">Signup</Link></li>
                                </ul>
                            </div>
                            <div className="at-right">
                                    <ul class="nav navbar-nav">
                                        <li class="active"><FaSearch/></li>
                                        <li><Link to="user"><FaUserAlt /></Link></li>
                                        <li><Link to="/cart"><FaShoppingCart/> Cart ({state.length})</Link></li>
                                    </ul>
                            </div>
                </div>   
            </div>
        )
    }
 export default Header;
