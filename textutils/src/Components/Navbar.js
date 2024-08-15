import React, {useState}from 'react'
import { Link } from "react-router-dom";

export default function Navbar(myProps) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${myProps.mode=="Dark"?'light': 'dark'} bg-${myProps.mode=="Dark"?'light': 'dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TextUtils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About US</Link>
                        </li>
                    </ul>
                    <button onClick={myProps.changeMode}  type="button" className="btn btn-primary  m-2">{myProps.mode}</button>
                    {/* <button onClick={[myProps.changeFunctions[0],  myProps.changeFunctions[1]( `${myProps.mode} enabled`, "success")]}  type="button" className="btn btn-primary  m-2">{myProps.mode}</button> */}
                </div>
            </div>
        </nav>
    )
}