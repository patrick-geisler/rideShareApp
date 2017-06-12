import React from 'react';
import ReactDOM from 'react-dom';




const DriverPage = () => {

  return(
    <form>
        <div className="row">
            <div className="small-12 small-centered large-6 large-centered columns">
                <h1>Please Fill Out Form to Create a Trip</h1>     
            </div>
        </div>
        <div className="row">
            <div className="large-6 large-centered columns">
                <label>Driver Name</label>
                <input type="text" placeholder="Please enter driver name"/>
            </div>
        </div>
        <div className="row">
            <div className="large-6 large-centered columns">
                <label>Date:</label>
                <input type="date" name="date"/>
            </div>
        </div>
        <div className="row">
            <div className="large-6 large-centered columns">
                <label>Time:</label>
                <input type="time" name="time"/>
            </div>
        </div>
        <div className="row">
            <div className="large-6 large-centered columns">
                <label>Leaving From</label>
                <input id="franklin" name="franklin" type="radio" value="franklin"/>
                <label for="franklin">Franklin</label>
                <input id="downtown" name="downtown" type="radio" value="downtown"/>
                <label for="downtown">Downtown</label>
            </div>
        </div>
        <div className="row">
            <div className="large-6 large-centered columns">
                <label>Number of Passengers</label>
                <select>
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
            <div className="large-6 large-centered columns">
                <button>Create Trip</button>
            </div>
        </div>
    </form>
  )
}


export default DriverPage;