import React from 'react';
import '.././App.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom'




class DriverPage extends React.Component{
  state={
    name: "",
    date: "",
    time: "",
    numPass: "",
    leavingFrom: "",
    submitted: false
  }
  handleSubmit = ( event )=>{
    event.preventDefault()
    axios.post('/api/trips', this.state)
    .then(response => {
      console.log(response.data);
      this.setState({submitted: true})
    })

  }
  stateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
render(){
  if (this.state.submitted === true){
    return <Redirect to="/rideshare"/>
  }
  return(
      <form onSubmit={this.handleSubmit}>
          <div className="row">
              <div className="small-10 small-centered large-8 large-centered columns">
                  <h1>Please Fill Out Form to Create a Trip</h1>
              </div>
          </div>
          <div className="row">
              <div className="small-12 small-centered large-6 large-centered columns">
                  <label>Driver Name</label>
                  <input name="name" type="text" onChange={this.stateChange} placeholder="Please enter driver name"/>
              </div>
          </div>
          <div className="row">
              <div className="large-3 large-centered inline-block columns">
                  <label>Date:</label>
                  <input placeholder= "Please select date" name="date" onChange={this.stateChange} type="date"/>
              </div>
          <div className="large-3 large-centered inline-block columns">
                  <label>Time:</label>
                  <input placeholder="Please select time" name="time" onChange={this.stateChange} type="time"/>
              </div>
          </div>
          <div className="row">
              <div className="large-3 large-centered inline-block columns">
                  <label>Leaving From</label>
                  <input id="franklin" name="leavingFrom" type="radio" value="Franklin"
                      onChange={this.stateChange} checked={this.state.leavingFrom === 'Franklin'} />
                  <label for="franklin">Franklin</label>
                  <input id="downtown" name="leavingFrom" type="radio" value="Downtown"
                      onChange={this.stateChange} checked={this.state.leavingFrom === 'Downtown'}/>
                  <label for="downtown">Downtown</label>
              </div>
              <div className="large-3 large-centered inline-block columns">
                  <label>Number of Passengers</label>
                  <select name="numPass" onChange={this.stateChange}>
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
                <button>Create Trip</button>
              </div>
          </div>
      </form>
    )
  }
}


export default DriverPage;
