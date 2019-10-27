import React, { Component } from "react";
import Navbar from "../components/navbar";
import institute from "../images/institute.jpg";
import graduate from "../images/graduate.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class HomePage extends Component {
    
    render(){


            return(
                    <div className="main__home">
                        <div className="main__home__body">
                          <Navbar />
                          <div className="main__home__links">
                            <div className="card mainLinks">
                                <img src={institute} className="card-img-top" alt="University" />
                                <div className="card-body">
                                    <h5 className="card-title">University Portal</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    {/* <Link to="/university"><button type="button" className="btn btn-primary">Handle Requests</button></Link> */}
                                </div>
                            </div>
                            <div className="card mainLinks">
                                <img src={graduate} className="card-img-top" alt="University" />
                                <div className="card-body">
                                    <h5 className="card-title">Student Portal</h5>
                                    <p className="card-text"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    {/* <Link to="/student"><button type="button" className="btn btn-primary">Request Document</button></Link> */}
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
            );
        }
}

export default HomePage;