import React from 'react';

const DrivesRow = (props) => {
  return(
    <tr>
      <td>
        {props.trip.name}
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

export default DrivesRow
