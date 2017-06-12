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

        return (
            <Router>
                <div>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/rideshare' render={() => {
                        return <Content user={this.state.user} />
                    }} />
                </div>
            </Router>
        )
    }
}

export default App;
