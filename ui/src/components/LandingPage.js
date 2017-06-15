import React from 'react';
import LandingRidesTable from './LandingRidesTable'
import LandingDrivesTable from './LandingDrivesTable'

const LandingPage = () => {
    return (
        <div className="row">
            <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered colums">
                <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered colums inline-block">
                    <h1>Welcome to NM RideShare</h1>
                    <hr/>
                </div>
                <div className="row">            
                    <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered inline-block valign-top padding-xlarge columns">
                        <LandingDrivesTable />
                    </div>
                    <div className="small-12 small-centered medium-8 medium-centered large-4 large-centered inline-block valign-top padding-xlarge columns">
                        <LandingRidesTable />
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default LandingPage;
