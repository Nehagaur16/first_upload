import logo from './logo.svg';
import React , {useState} from "react";
import './App.css';
import Header from './Header';
import'bootstrap/dist/css/bootstrap.css';
import Home from './component/Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoutesData from './component/RoutesData';
import MyCart from './component/MyCart';
import { useSelector, useDispatch } from 'react';
import CartBtn from './component/buttons/CartBtn';
import addItem from './component/reducers/addItem';

function App() {


  {/*const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      set
    }
  }*/}
  

  return (
    <div className="App">
        <Router>
          <Header></Header>
          <addItem></addItem>

          <div className="inner-banner">
              <img src="images/bg.svg" className="img-fluid" alt="product"/>
          </div>
          <RoutesData />
          <Footer/>
        </Router>
    </div>
  );
}
export default App;
