import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/App.css'

export default function NavBar() {

    return (
    <div className="navbar">
       <img className="logo" src={Logo}/>
       <div className="toolbar">

             <Link className="link" to="/Menschen"><i id="icon" className="fas fa-users"></i><br></br>Menschen</Link>
            <br></br>
            
            <Link className="link" to="/ECom"><i id="icon" className="fas fa-shopping-cart"></i><br></br>ECommerce</Link> 
          
        </div>
      
    </div>
    );
}