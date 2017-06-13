import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Content from './components/Content'

class App extends React.Component {


    state = {
        user: null
    }

    loginAction = (username) => {
        this.setState({user: {username}})
    }

    render() {

        return (
            <Router>
                <div>
                    <Route path='/rideshare' render={() => {
                        return <Content user={this.state.user} />
                    }} />
                </div>
            </Router>
        )
    }
}

export default App;
