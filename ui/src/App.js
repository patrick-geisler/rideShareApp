import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DriverPage from './components/DriverPage';
import RiderPage from './components/RiderPage';


const App = () => {
  return(
    <div>
      <LandingPage />
      <LoginPage />
      <DriverPage />
      <RiderPage />
    </div>
  )
}

export default App;
