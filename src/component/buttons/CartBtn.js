import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";


const CartBtn = () => {
    // we get a state of additems
    // write the name of the file not the function
    const state = useSelector((state) => state.handleCart);
    console.log(state);
    return (
        <div>
            <Link to="/cart" className="btn btn-outline-primary">
                <FaShoppingCart/> Cart (0) ({state.length})
            </Link>
        </div>
    )
} 

export default CartBtn;