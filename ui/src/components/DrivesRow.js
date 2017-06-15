import React from 'react';

const DrivesRow = (props) => {
    console.log('DrivesRow() props-->', props)

    return (
        <tbody>
            <tr>
                <td>{props.trip.date}</td>
                <td>{props.trip.time}</td>
                <td> {props.trip.leavingFrom} </td>
            </tr>
        </tbody>
    )
}

export default DrivesRow
