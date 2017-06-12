import React from 'react';
import ReactDOM from 'react-dom';





const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="row">
                <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered columns">
                    <ul className="button-group small even-2">
                        <li><button>Book A Ride</button></li>
                        <li><button>Create A Trip</button></li>
                    </ul>
                </div>
                <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered columns">
                    <table className="table">
                        <caption>My Trips</caption>
                        <thead>
                            <tr>
                                <th width="400">Driver</th>
                                <th width="300" class="text-right">Passengers</th>
                                <th width="400">Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Collin Kosinski</td>
                                <td>Matt Matuszak Patrick Geisler Billy Bob</td>
                                <td>Downtown</td>
                            </tr>
                            <tr>
                                <td>Collin Kosinski</td>
                                <td>Patrick Geisler</td>
                                <td>Downtown</td>
                            </tr>
                            <tr>
                                <td>Collin Kosinski</td>
                                <td>Billy Bob</td>
                                <td>Franklin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered columns">
                    <table className="table">
                        <caption>My Rides</caption>
                        <thead>
                            <tr>
                                <th width="400">Driver</th>
                                <th width="300" class="text-right">Passengers</th>
                                <th width="400">Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Random Randy</td>
                                <td>Collin Kosinski</td>
                                <td>Downtown</td>
                            </tr>
                            <tr>
                                <td>Matt Matuszak</td>
                                <td>Collin Kosinski</td>
                                <td>Downtown</td>
                            </tr>
                            <tr>
                                <td>Leary Larry</td>
                                <td>Collin Kosinski</td>
                                <td>Franklin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default LandingPage;







