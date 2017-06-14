import React from 'react'
import dateformat from 'dateformat'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const TripRow = (props) => {

  const bookRide = (event) => {
    event.preventDefault()
    axios.patch('/api/trips', props.trip, {numPass: 10})
    .then(response => {
      console.log("OK!");
    })
    .catch(err => {
      console.log('Errrrrrrroooooooorrrrrrr');
    })
  }
  return(
    <tr>
      <td>
        {props.trip.name}
      </td>
      <td>
        {dateformat(props.trip.date, "mmm dd")}
      </td>
      <td>
        {dateformat(props.trip.time, "h:MM")}
      </td>
      <td>
        {props.trip.numPass}
      </td>
      <td>
        {props.trip.leavingFrom}
      </td>
      <td>
        <button onClick={bookRide}/>
      </td>
    </tr>
  )
}

export default TripRow
