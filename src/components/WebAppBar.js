import React from 'react'
import './WebAppBar.css'
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
