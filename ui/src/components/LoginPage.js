import React from 'react';
import ReactDOM from 'react-dom';

class LoginPage extends React.Component {

    state = {
        login: ''
    }

    loginChange = (event) => {
        this.setState({login: event.target.value})
    }

    submit = (event) => {
        event.preventDefault();
        console.log(this.state.login)
        this.props.loginAction(this.state.login)
    }


    render() {
        return (
            <div className='gridContainer'>
                <div className='row'>
                    <div className='small-3 small-centered columns'>
                        <h1>Please Login</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='small-3 small-centered columns'>
                        <form onSubmit={this.submit}>
                            <input type="text" onChange={this.loginChange} name="LoginPage" placeholder="enter username"/>
                            <button type="submit" className="tiny">Sign-in</button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default LoginPage;
