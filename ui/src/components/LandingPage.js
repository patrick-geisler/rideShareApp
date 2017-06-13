import React from 'react';
import LandingRidesTable from './LandingRidesTable'
import LandingDrivesTable from './LandingDrivesTable'

const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="row">
                <div>
                    <h1>Welcome to the Rideshare Landing Page</h1>
                </div>
                <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered inline-block valign-top padding-xlarge columns">
                    <LandingDrivesTable />
                </div>
                <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered inline-block valign-top padding-xlarge columns">
                    <LandingRidesTable />
                </div>
            </div>
        </div>
    )
}


export default LandingPage;
