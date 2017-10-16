import React, {Component} from 'react';
import { Link }  from 'react-router-dom';
import './index.scss';
class HomeComonentLeft extends Component {
    constructor(){
        super();
        this.state = {
            homeRoute: [
                {path: "/about", name: "ABOUT"},
                {path: "/project", name: "PROJECT"},
                {path: "/contact", name: "CONTACT"},
            ]
        }
    }
    render() {
        return (
            <div className="home_left">
                <em className="icon">L</em>
                <div className="l-content">
                    <h1 className="title">Lsmaxs</h1>
                    <p className="job">web coder && web designer</p>
                    <ul className="nav">
                        {
                            this.state.homeRoute.map((route,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to={route.path}>{route.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <a className="found-me" target="_blank" href="https://github.com/Lsmaxs">
                        find me on github
                    </a>
                </div>
            </div>
        )
    }
}

export default HomeComonentLeft;