import React from 'react'
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import './WebAppBar.css'
// import './Sign.css'
import logo from './logo.jpg'


export default function WebAppBar() {
    return (
        <header className="web-app-bar">
            <img src={logo} alt="Logo" />
            <div className="company-name">
                GATS SCS
            </div>
        </header>
    )
}
