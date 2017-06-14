import React from 'react'
import dateformat from 'dateformat'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class TripRow extends React.Component{
  state = {
    submitted: false
  }

 bookRide = (event) => {
    event.preventDefault()
    axios.patch('/api/trips', this.props.trip, {numPass: 10})
    .then(response => {
      console.log("OK!");
      this.setState({
        submitted: true
      })
    })
    .catch(err => {
      console.log('Errrrrrrroooooooorrrrrrr');
    })
  }
  render() {
      if (this.state.submitted === true) {
          return <Redirect to="/rideshare" />
      }
      return(
        <tr>
          <td>
            {this.props.trip.name}
          </td>
          <td>
            {dateformat(this.props.trip.date, "mmm dd")}
          </td>
          <td>
            {dateformat(this.props.trip.time, "h:MM")}
          </td>
          <td>
            {this.props.trip.numPass}
          </td>
          <td>
            {this.props.trip.leavingFrom}
          </td>
          <td>
            <button onClick={this.bookRide}/>
          </td>
        </tr>
      )
  }
}

export default TripRow
