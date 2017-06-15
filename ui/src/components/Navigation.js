import React from 'react';
import {Link} from 'react-router-dom'

import LoginPage from './LoginPage'


const Navigation = (props) => {
  return(
    <div className="row padding-large">
      <div>
          <ul className="filter-nav small-6 small-centered medium-8 medium-center large-6 large-centered inline-block valign-top columns">
              <li className="filter-nav-entry"><Link to="/rideshare"><button>Home</button></Link></li>
              <li className="filter-nav-entry"><Link to="/rideshare/rider"><button>Book Ride</button></Link></li>
              <li className="filter-nav-entry"><Link to="/rideshare/driver"><button>Create Trip</button></Link></li>
          </ul>
        <div className="small-12 medium-8 large-3 columns">
            <LoginPage />
        </div>
      </div>
    </div>
  )
}


export default Navigation;
