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
    </tr>
  )
}

export default TripRow
