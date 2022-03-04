import React, { Component } from 'react'
import'bootstrap/dist/css/bootstrap.css';


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="headerbanner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-12 p-0">
                                <div className="home-header-left">
                                    <h1>Give Someone A Coffee Connection Christmas</h1>
                                    <h5>A TRIPLE SHOT OF THE HOLIDAY SPIRIT</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 p-0">
                                <div className="home-header-right">
                                    <img src="images/coffee-header.jpg" className="img-fluid" alt="coffee"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="products">
                    <div className="container">
                        <div className="row">
                                <div className="col-12">
                                    <h2>THIS WEEK’S FAVOURITES</h2>
                                </div>
                                <div className="col-lg-3">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="images/product.jpg" className="img-fluid" alt="products"/>
                                        </div>
                                        <div className="product-name">
                                            <h4><a href="#">Vienna Creme</a></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="images/product.jpg" className="img-fluid" alt="products"/>
                                        </div>
                                        <div className="product-name">
                                            <h4><a href="#">Vienna Creme</a></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="images/product.jpg" className="img-fluid" alt="products"/>
                                        </div>
                                        <div className="product-name">
                                            <h4><a href="#">Vienna Creme</a></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="images/product.jpg" className="img-fluid" alt="products"/>
                                        </div>
                                        <div className="product-name">
                                            <h4><a href="#">Vienna Creme</a></h4>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
