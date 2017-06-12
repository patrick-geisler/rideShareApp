import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router, Route , Redirect} from 'react-router-dom'
import Content from './components/Content'
const App = () => {

  return(
    <Router>
        <div> 
          <Route exact path='/' component={LoginPage}/> 
          <Route path='/rideshare' component={Content}/>  
           
        </div>
    </Router>
  )
}

export default App;
