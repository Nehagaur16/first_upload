import React, { Component, useState, useEffect } from 'react'
import { render } from 'react-dom'; 
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart } from './actions';
import handleCart from './reducers/handleCart';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);    

    // we need to store useDispatch in a variable
    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
            console.log("product detail", product);
         }
        getProduct();
    }, []);

    console.log("product detail check", product);

    {/*const handleCart = (product) => {
        if (cartBtn === "Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove From Cart")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add To Cart")
        }
    }*/}
    const Loading = () => {
        return( 
            <div>
                Loading....
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div>
                <div className="product-detail-page">
                    <div className="product-detail-area">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="product-image">
                                    <img src={product.image} className="img-fluid" alt="product" height="400px"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="product-detail">
                                        <div className="product-name">
                                        <h2>{product.title}</h2>
                                        <hr />
                                        <h4>${product.price}</h4>
                                        <h6 className='rating'>Rating {product.rating && product.rating.rate} <FaStar/></h6>
                                        </div>
                                        <div className="product-text">
                                        <p>
                                            {product.description}
                                        </p>
                                        </div>
                                        <div className='cart-buttons'>
                                            <div className="add-cart">
                                                <button type="submit" 
                                                class="add-cart-button" onClick={() => addProduct(product)}>
                                                    {cartBtn}
                                                </button>
                                            </div>
                                            <div className="add-cart">
                                                <Link to="/cart">
                                                     <button type="submit" class="add-cart-button">Go to cart</button>
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (      
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            {loading ? <Loading/> : <ShowProduct/>}
                        </div>
                    </div>
                </div>
        )
}


export default ProductDetail;