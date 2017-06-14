import React from 'react';

const TripRow = (props) => {
  return(
    <tr>
      <td>
        {props.trip.name}
      </td>
      <td>
        {props.trip.time}
      </td>
      <td>
        {props.trip.numPass}
      </td>
      <td>
        {props.trip.leavingFrom}
      </td>
    </tr>
  )
}

export default TripRow
