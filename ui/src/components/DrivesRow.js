import React from 'react';

const DrivesRow = (props) => {
    return (
        <tr>
            <td>{props.trip.date}</td>
            <td>{props.trip.time}</td>
            <td> {props.trip.leavingFrom} </td>
            <td>{props.trip.leavingFrom}</td>
        </tr>
    )
}

export default DrivesRow
