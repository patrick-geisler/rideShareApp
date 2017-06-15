import React from 'react';
import dateformat from 'dateformat-light'

const RidesRow = (props) => {
  console.log(props.trip);
  return(
    <tr>
      <td>
        <img src={props.trip.driver.picURL} alt='driverPic'/>
      </td>
      <td>
        {props.trip.driver.name}
      </td>
      <td>
        {dateformat(props.trip.date, "mmm dd")}
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
