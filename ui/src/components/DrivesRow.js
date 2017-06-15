import React from 'react';
import dateformat from 'dateformat-light'

const DrivesRow = (props) => {
    console.log('DrivesRow() props-->', props)

    return (
        <tbody>
            <tr>
                <td>{dateformat(props.trip.date, "mmm dd")}</td>
                <td>{props.trip.time}</td>
                <td> {props.trip.leavingFrom} </td>
            </tr>
        </tbody>
    )
}

export default DrivesRow
