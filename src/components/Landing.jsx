import React, { Component } from 'react';
import './Logo.css'
import { Link, Redirect } from 'react-router-dom'
import LOGO from './logo.jpg';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect:false}
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2500)
      }
    
      componentWillUnmount() {
        clearTimeout(this.id)
      }
    
    render() {
        return (
            this.state.redirect
            ? <Redirect to="/sign" />
        :<div>
            <div className='body'>
                <div className='content-box'>
                <img src={LOGO} alt='Website-Logo' />
                <h1> Smart Charging Station powered by GATS </h1>
                </div>
            </div>
        </div>
        )
    }
    
}
 
export default Landing;