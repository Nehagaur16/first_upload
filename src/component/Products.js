import React, { Component, useState, useEffect } from 'react'
import { render } from 'react-dom';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import Data from './Data'; 
import Signup from './Signup';
import { increment } from './actions/countAction';

const Products = () => {
    const[ products, setProducts] = useState([]);
    const [ loading, setLoading ] = useState(false);
    let componentMounted = true;

    const getProducts = async () => {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (componentMounted){
            setProducts(await response.json());
            setLoading(false);
            console.log("all products", products);
        }
        return () => {
            componentMounted = false;
        }
    };

    useEffect(() => {
        getProducts();
    },[]);
    
    const Loading = () => {
        return(
            <div>
                Loading....
            </div>
        )
    }

    const ShowProducts = () => {
        return (
            <div>
                 <div className='container'>
                    <div className='row'>
                        {products.map(product => 
                                <div className='col-lg-4 col-12'>
                                <div className='card' key={product.id}> 
                                        <div>
                                            <img className='product-image img-fluid' src={product.image} alt="product-name"/>
                                        </div>
                                        <div>
                                        <h3 className='product-name'>{product.id}</h3>
                                            <h3 className='product-name'>{product.title.substring(0,12)}...</h3>
                                            <h5 className='product-body'>${product.price}</h5>
                                        </div>
                                        <NavLink to={`/product-detail/${product.id}`}>   
                                          <button className='cart-btn btn btn-outline-dark'>Buy Now</button>
                                        </NavLink>    
                                </div>
                    </div>
                    )}
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div className="products">
                <div className='container'>
                    <div className='row'>
                                <div className='col-12'>
                                    {loading ? <Loading/> : <ShowProducts/>}
                                </div>
                    </div>
                </div>
        </div>
                                
    )
}

export default Products;