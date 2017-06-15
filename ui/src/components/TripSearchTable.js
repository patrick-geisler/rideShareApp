import React from 'react';
import axios from 'axios';
import TripRow from './TripRow'
import { connect } from 'react-redux';


class TripSearchTable extends React.Component{
state = {
  searched: false,
  trips:[]
}
componentDidMount(){
  console.log('this is this...... props', this.props.loggedInUser);
  // axios.get('/api/trips/search', {
  //   params: {
  //     ...this.props.search
  //     // , notUser: this.props.loggedInUser.id
  //   }
  // })
  // .then(response =>{
  //   this.setState({
  //     searched: true,
  //     trips: response.data
  //   })
  // })
  // .catch(err =>{
  //   console.log(err);
  // })
}

componentWillReceiveProps(nextProps){
  console.log(nextProps.loggedInUser.id)
  axios.get('/api/trips/search', {
    params: {
      ...nextProps.search
      , notUser: nextProps.loggedInUser.id
    }
  })
  .then(response =>{
    console.log(response);
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
                  <th width="500"></th>
                  <th width="500" className='text-left'>Driver</th>
                  <th width="400" className='text-left'>Date</th>
                  <th width="400" className='text-left'>Time</th>
                  <th width="200" className='text-left'>Availible Seats</th>
                  <th width="400" className='text-left'>Leaving From</th>
                  <th></th>


              </tr>
          </thead>
          <tbody>
              {tripRows}
          </tbody>
        </table>
    )
  }
}


const mapStatetoProps = (state) => {
  console.log('mappping state to props .................', state.loggedInUser);
    return ({ loggedInUser: state.loggedInUser.user})
}

export default connect(mapStatetoProps, null) (TripSearchTable);
