import React, { Component } from 'react';
import LandingPage from './LandingPage';
import DriverPage from './DriverPage';
import RiderPage from './RiderPage';
import Navigation from './Navigation'
import {BrowserRouter as Router, Route , Redirect, Link} from 'react-router-dom'

const Content = (props) => {

  return(
    <div>
      <div>
        <Navigation />
      </div>
        <div>
          <Route exact path='/rideshare' component={LandingPage}/>
          <Route path='/rideshare/driver' component={DriverPage}/>
          <Route path='/rideshare/rider' component={RiderPage}/>
        </div>
    </div>
  )
}

export default Content;
