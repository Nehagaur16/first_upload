import React, { Component } from 'react'
import './style.css';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="subscribe">
                                    <h5>SUBSCRIBE TO OUR NEWSLETTER!</h5>
                                    <p>Always be up to date with our latest offers & coffee flavours.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="subscribe-form">
                                    <form>
                                        <input type="email" id="email-sub" class="form-control" name="email" placeholder="Email" required=""/>
                                        <button className="btn my-btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>    
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h6>All rights are reserved </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
