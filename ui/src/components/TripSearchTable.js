import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TripRow from './TripRow'


class TripSearchTable extends React.Component{
constructor(props){
  super(props)
}
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

componentWillReceiveProps(){
  console.log(this.props);
  axios.get('/api/trips', {
    params: {
      ...this.props.search
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
  if (this.state.searched === false){
    return(
      <div>
        <h2>Please Submit a Search</h2>
      </div>
    )
  }
  if (this.state.searched === true && this.state.trips.length === 0){
    return(
      <div>
        <h2>No results found</h2>
      </div>
    )
  }
  const tripRows = this.state.trips.map(trip => {
    return <TripRow trip={trip} key={trip.id}/>
  })
  return(
    <table className="table side-borders-none actionable" summary="This summary is for screen readers and should summarize the structure of the table headers and rows">
      <caption className="show-for-sr">Basic Table</caption>
          <thead>
              <tr>
                  <th width="500" className='text-left'>Driver</th>
                  <th width="400" className='text-left'>Time</th>
                  <th width="400" className='text-left'>Availible Seats</th>
              </tr>
          </thead>
          <tbody>
              {tripRows}
          </tbody>
        </table>
    )
  }
}


export default TripSearchTable
