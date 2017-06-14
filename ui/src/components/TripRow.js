import React from 'react'
import dateformat from 'dateformat-light'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'


class TripRow extends React.Component{
  state = {
    submitted: false
  }
  submit = () => {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure you want to book this ride?',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        onConfirm: this.bookRide,
        onCancel: () => {},
      })
    };

 bookRide = () => {
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
            {this.props.trip.time}
          </td>
          <td>
            {this.props.trip.numPass}
          </td>
          <td>
            {this.props.trip.leavingFrom}
          </td>
          <td>
            <button onClick={this.submit}/>
          </td>
        </tr>
      )
  }
}

export default TripRow
