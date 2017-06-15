import React from 'react';
import axios from 'axios';
import RidesRow from './RidesRow'
import { connect } from 'react-redux';


class LandingRidesTable extends React.Component{
state = {
  searched: false,
  trips:[]
}
componentDidMount(){
  // console.log(this.props);
  // axios.get('/api/trips/search/LandingRidesTable', {
  //   params: {
  //     // id: this.props.loggedInUser.id
  //   }
  // })
  // .then(response =>{
  //   console.log(`Component Did mount search`, response.data);
  //   this.setState({
  //     searched: true,
  //     trips: response.data
  //   })
  // })
}

componentWillReceiveProps(nextProps){
  axios.get('/api/trips/search/LandingRidesTable', {
    params: {
      id: nextProps.loggedInUser.id
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
          <caption><u>My Reserved Rides</u></caption>
          <thead>
              <tr>
                  <th></th>
                  <th>Driver</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Destination</th>
              </tr>
          </thead>
          <tbody>
              {ridesRow}
          </tbody>
      </table>
    )
  }
}

const mapStatetoProps = (state) => {
    return ({ loggedInUser: state.loggedInUser.user})
}

export default connect(mapStatetoProps, null) (LandingRidesTable);
