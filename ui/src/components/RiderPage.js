import React from 'react';
import TripSearchTable from './TripSearchTable'
import '.././App.css';
import { connect } from 'react-redux';


class RiderPage extends React.Component {
    changeState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            })

        }

    switchState = (event) => {
        if(event.target.checked === false){
            this.setState({
                [event.target.name]: 'Downtown'
                })
            }else{
            this.setState({
                [event.target.name]: 'Franklin'
            })
        }
    }
    onSubmit = (event) => {
        event.preventDefault()
    }
    render() {
        const tripSearchTable = <TripSearchTable search={this.state} />
        return (
            <div className='row margin-bottom-large'>
                <div className='small-6 inline-block small-centered columns'>
                    <h1>
                    Book A Ride
                    </h1>
                    <hr/>
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <input className="large-6 inline-block valign-top columns" type="date" name="myDate" onChange={this.changeState}></input>
                            <div className="large-6 inline-block valign-top large-centered columns">
                                <label htmlFor="text-switch-1">Please Select Leaving Location</label>
                                <div className="switch switch-text large">
                                    <input className="switch-input" id="text-switch-2" type="checkbox" name="leavingFrom" onChange={this.switchState} />
                                    <label className="switch-paddle" htmlFor="text-switch-2" style={{background: '#336283'}}>
                                        <span className="switch-active text-left" aria-hidden="true">Franklin</span>
                                        <span className="switch-inactive text-right" aria-hidden="true">Downtown</span>
                                    </label>
                                </div>
                            </div>
                            <div className="large-3 large-centered inline-block padding-medium">
                                <label>Early Bound</label>
                                <input type="time" placeholder='Early' name="earlyBound" onChange={this.changeState}></input>
                            </div>
                            <div className="large-3 large-centered inline-block padding-medium">
                                <label>Late Bound</label>
                                <input type="time" placeholder='Late' name="lateBound" onChange={this.changeState}></input>
                            </div>
                        </div>
                    </form>
                    {tripSearchTable}
                </div>

            </div>
        )
    }
}


const mapStatetoProps = (state) => {
    return ({ loggedInUser: state.loggedInUser.user})
}

export default connect(mapStatetoProps, null) (RiderPage);
