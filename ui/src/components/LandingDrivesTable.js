import React from 'react';
import axios from 'axios';
import DrivesRow from './DrivesRow'

class LandingDrivesTable extends React.Component{
state = {
  searched: false,
  trips:[]
}
componentDidMount(){
  axios.get('/api/trips', {
    params: {
      ...this.props.search
    }
  })
  .then(response =>{
    console.log(`Component Did mount search`, response.data);
    this.setState({
      searched: true,
      trips: response.data
    })
  })
}

componentWillReceiveProps(nextProps){
  console.log('TripSearchTable.componentWillReceiveProps()', nextProps);
  axios.get('/api/trips', {
    params: {
      ...nextProps.search
    }
  })
  .then(response =>{
    console.log(`Cpom will recieve search`, response.data)
    this.setState({
      searched: true,
      trips: response.data
    })
  })
}
  render(){
    const drivesRow = this.state.trips.map(trip => {
      return <DrivesRow trip={trip} key={trip.id}/>
    })
    return(
      <table className="table">
          <caption>My Drives</caption>
          <thead>
              <tr>
                  <th width="400">Driver</th>
                  <th width="300">Passengers</th>
                  <th width="400">Leaving From</th>
              </tr>
          </thead>
          <tbody>
              {drivesRow}
          </tbody>
      </table>
    )
  }
}

export default LandingDrivesTable
