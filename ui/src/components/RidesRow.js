import React from 'react';

const RidesRow = (props) => {
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

export default RidesRow
