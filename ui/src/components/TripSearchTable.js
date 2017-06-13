import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class TripSearchTable extends React.Component{
state = {
  searched: false,
  trips:[]
}
componentDidMount(){
  axios.get('/api/trips', this.props)
  .then(response =>{
    this.setState({
      searched: true,
      trips: response.data
    })
  })
}
render(){
  console.log(this.props);
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
              <tr>
                  <td>Suzie</td>
                  <td>6:00</td>
                  <td>6</td>
              </tr>
              <tr>
                  <td>Mark</td>
                  <td>8:00</td>
                  <td>6</td>
              </tr>
              <tr>
                  <td>Joe</td>
                  <td>7:30</td>
                  <td>6</td>
              </tr>
          </tbody>
        </table>
    )
  }
}


export default TripSearchTable
