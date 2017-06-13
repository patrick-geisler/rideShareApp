import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'




const Navigation = () => {
  return(
    <div ClassName="row">
      <div className="small-12 small-centered  columns">
          <ul className="filter-nav small-centered even-3">
              <li className="filter-nav-entry"><Link to="/rideshare"><button>Landing Page</button></Link></li>
              <li className="filter-nav-entry"><Link to="/rideshare/rider"><button>Book Ride</button></Link></li>
              <li className="filter-nav-entry"><Link to="/rideshare/driver"><button>Create Trip</button></Link></li>

          </ul>
      </div>
    </div>
  )
}


export default Navigation;
