import React from "react";
import Products from "./Products";
import { Route, Routes, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signup from './Signup.js';
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import DetailProduct from "./DetailProduct";
import MyCart from "./MyCart";
import Cart from "./Cart";
import Data from "./Data";
import Checkout from "./Checkout";
import AboutUs from "./AboutUs";
import { useSelector, useDispatch } from 'react';


const RoutesData = () => {
    console.log(Data[0]);
   // const dispatch = useDispatch();

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>

                <Route path="/products" exact>
                  <Products/>
                </Route>

                {/*<Route path="/products" exact>
                    {Data.map((mydata) => (
                    <Products 
                             dname={mydata.name}
                             dimage={mydata.image}
                             dprice={mydata.price}
                             key={mydata.id}
                    > </Products> 

                    ))}        
                    </Route>*/}

                <Route path="/product-detail/:id" exact>
                    <ProductDetail />
                </Route>
                
                <Route path="/mycart" exact>
                    <MyCart />
                </Route>

                <Route path="/cart" exact>
                    <Cart />
                </Route>

                <Route path="/checkout" exact>
                    <Checkout />
                </Route>

                <Route path="/signup" exact>
                    <Signup />
                </Route>

                <Route path="/about" exact>
                    <AboutUs />
                </Route>

            </Switch>
        </div>
    );
    
};

export default RoutesData;