import React from 'react';

const RidesRow = (props) => {
  console.log(props.trip);
  return(
    <tr>
      <td>
        <img src={props.trip.driver.picURL} alt='driverPic'/>
      </td>
      <td>
        {props.trip.name}
      </td>
      <td>
        {props.trip.date}
      </td>
      <td>
        {props.trip.time}
      </td>
      <td>
        {props.trip.leavingFrom}
      </td>
    </tr>
  )
}

export default RidesRow
