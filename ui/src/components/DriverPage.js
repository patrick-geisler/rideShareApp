import React from 'react';
import '.././App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'




class DriverPage extends React.Component {
    state = {
        name: "",
        date: "",
        time: "",
        numPass: "",
        leavingFrom: "",
        submitted: false,
        dateValidation: ''
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/trips', this.state)
            .then(response => {
                console.log(response.data);
                this.setState({ submitted: true })
            })

    }
    stateChange = (event) => {
        if(event.target.name === 'date'){
            var userdate = new Date(event.target.value).toJSON().slice(0, 10);
            var today = new Date().toJSON().slice(0, 10);
                if (userdate < today) {
                    this.setState({
                        dateValidation: 'Please select a valid future date'
                    })
                }else{
                    this.setState({
                        dateValidation: '',
                    })
                }
        }
        this.setState({
            [event.target.name]: event.target.value
            })
    }


    render() {
        if (this.state.submitted === true) {
            return <Redirect to="/rideshare" />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="small-10 small-centered large-8 large-centered columns">
                        <h1>Please Fill Out Form to Create a Trip</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 small-centered large-6 large-centered columns">
                        <label>Driver Name</label>
                        <input name="name" type="text" onChange={this.stateChange} placeholder="Please enter driver name" required />
                    </div>
                </div>
                <div className="row">
                    <div className="large-3 large-centered inline-block columns">
                        <label>Date:</label>
                        <input placeholder="Please select date" name="date" id="mydate" onChange={this.stateChange} type="date" required />
                        {this.state.dateValidation}
                    </div>
                    <div className="large-3 large-centered inline-block columns">
                        <label>Time:</label>
                        <input placeholder="Please select time" name="time" onChange={this.stateChange} type="time" required />
                    </div>
                </div>
                <div className="row">
                    <div className="large-3 large-centered inline-block columns">
                        <label>Leaving From</label>
                        <input id="franklin" name="leavingFrom" type="radio" value="Franklin"
                            onChange={this.stateChange} checked={this.state.leavingFrom === 'Franklin'} required />
                        <label htmlFor="franklin">Franklin</label>
                        <input id="downtown" name="leavingFrom" type="radio" value="Downtown"
                            onChange={this.stateChange} checked={this.state.leavingFrom === 'Downtown'} required />
                        <label htmlFor="downtown">Downtown</label>
                    </div>
                    <div className="large-3 large-centered inline-block columns">
                        <label>Number of Passengers</label>
                        <select name="numPass" onChange={this.stateChange} required>
                            <option value="1">
                                1
                  </option>
                            <option value="2">
                                2
                  </option>
                            <option value="3">
                                3
                  </option>
                            <option value="4">
                                4
                  </option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="large-3 large-centered columns">
                        <button disabled={this.state.date === '' || this.state.dateValidation == 'Please select a valid future date' }>Create Trip</button>
                    </div>
                </div>
            </form>
        )
    }
}


export default DriverPage;
