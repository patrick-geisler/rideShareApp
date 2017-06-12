import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Content from './components/Content'

class App extends React.Component {


    state = {
        user: null
    }

    loginAction = (username) => {
        this.setState({user: {username}})
    }

    render() {

        let route = <Redirect to='/rideshare' />
        if (this.state.user === null) {
            route = <LoginPage loginAction={this.loginAction} />
        }

        return (
            <Router>
                <div>
                    {route}
                </div>
            </Router>
        )
    }
}

export default App;
