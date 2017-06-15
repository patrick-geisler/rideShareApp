import React from 'react';

import {connect} from 'react-redux'

import axios from 'axios';

import DrivesRow from './DrivesRow'

class LandingDrivesTable extends React.Component {
    state = {
        searched: false,
        trips: []
    }
    componentDidMount() {
        console.log('LandingDrivesTable.componentDidMount() props-->', this.props);
        axios.get('/api/trips', {
            params: {
                ...this.props.search
                , loggedInUser: this.props.loggedInUser
            }
        }).then(response => {
            console.log(`Component Did mount search`, response.data);
            this.setState({searched: true, trips: response.data})
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log('TripSearchTable.componentWillReceiveProps() nextProps-->', nextProps);
        console.log('TripSearchTable.componentWillReceiveProps() currentProps-->', this.props);

        axios.get('/api/trips', {
            params: {
                loggedInUser: nextProps.loggedInUser
                // loggedInUser: nextProps.loggedInUser
            }
        }).then(response => {
            console.log(`Cpom will recieve search`, response.data)
            this.setState({searched: true, trips: response.data})
        })
    }
    render() {
        console.log('TripSearchTable.render() currentProps-->', this.props);

        const drivesRow = this.state.trips.map(trip => {
            return <DrivesRow trip={trip} key={trip.id}/>
        })
        return (
            <table className="table">
                <caption>My Drives</caption>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Leaving From</th>
                        <th>Passengers</th>
                    </tr>
                </thead>
                <tbody>
                    {drivesRow}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps -->', state.loggedInUser.user);
    return {
        loggedInUser: state.loggedInUser.user
    }
}

export default connect(mapStateToProps, null)(LandingDrivesTable)
