import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

import LoginPage from './LoginPage'


const Navigation = (props) => {
  return(
    <div className="row">
      <div className="small-8 columns">
          <ul className="filter-nav small-centered">
              <li className="filter-nav-entry"><Link to="/rideshare"><button>Landing Page</button></Link></li>
              <li className="filter-nav-entry"><Link to="/rideshare/rider"><button>Book Ride</button></Link></li>
              <li className="filter-nav-entry"><Link to="/rideshare/driver"><button>Create Trip</button></Link></li>
          </ul>
      </div>
      <div className="small-4 columns">
          <LoginPage />
      </div>
    </div>
  )
}


export default Navigation;
