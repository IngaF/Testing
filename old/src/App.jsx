import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import ECom from './components/pages/ECom';
import './styles/App.css';
import Menschen from './components/pages/Menschen';


export default function Appl() {
  return (
  
        <div className="wrapMain">
        
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar/>
        <Switch>
            <Route path="/" exact component={Menschen}/>
            <Route path="/Menschen"  component={Menschen}></Route>
            <Route path="/ECom" component={ECom}></Route> 
        </Switch>
     </Router>
    
     </div>
    
    );

}