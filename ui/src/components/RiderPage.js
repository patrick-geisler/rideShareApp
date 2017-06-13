import React from 'react';
import TripSearchTable from './TripSearchTable'


class RiderPage extends React.Component{
  changeState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
  }
  render(){
    console.log('rider page.render ', this.state);
    const tripSearchTable = <TripSearchTable search={this.state}/>
    return(
      <div className='row'>
        <h1>
          Book A Ride
        </h1>
        <div className='small-6 inline-block small-centered columns'>
          <form onSubmit={this.onSubmit}>
            <div className="inline-block row">
              <div className="inline-block padding-medium">
                <label>Early Bound</label>
                <input type="time" placeholder='Early' name="earlyBound" onChange={this.changeState}></input>
              </div>
              <div className="inline-block padding-medium">
                <label>Late Bound</label>
                <input type="time" placeholder='Late' name="lateBound" onChange={this.changeState}></input>
              </div>
            </div>
              <input type="date" name="myDate" onChange={this.changeState}></input>
              <button className='button'> Filter </button>
          </form>
            {tripSearchTable}
          </div>

        </div>
    )
  }
}


export default RiderPage;
