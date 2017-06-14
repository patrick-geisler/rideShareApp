import React from 'react';
import axios from 'axios';
import RidesRow from './RidesRow'


class LandingRidesTable extends React.Component{
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
  axios.get('/api/trips', {
    params: {
      ...nextProps.search
    }
  })
  .then(response =>{
    this.setState({
      searched: true,
      trips: response.data
    })
  })
}
  render(){
    const ridesRow = this.state.trips.map(trip => {
      return <RidesRow trip={trip} key={trip.id}/>
    })
    return(
      <table className="table">
          <caption>My Trips</caption>
          <thead>
              <tr>
                  <th width="400">Driver</th>
                  <th width="300">Time</th>
                  <th width="400">Destination</th>
              </tr>
          </thead>
          <tbody>
              {ridesRow}
          </tbody>
      </table>
    )
  }
}

export default LandingRidesTable
