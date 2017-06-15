import React from 'react';

const PassengerRow = (props) => {
    // console.log('DrivesRow() props-->', props)
    const passengersSubTable = props.trip.currPassDetails.map(passDetails => {
        return (
            <tr key={passDetails.id}>
                <td></td>
                <td><img src={passDetails.picURL} alt='' /></td>
                <td>{passDetails.name}</td>
            </tr>
        )
    });


    return (
        <tbody className='sub-table'>
            {/* <tr>
                <th></th>
                <th></th>
                <th>Passenger Name</th>
            </tr> */}
            {passengersSubTable}
        </tbody>
    )
}

export default PassengerRow
