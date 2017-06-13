import React from 'react';
import ReactDOM from 'react-dom';

class LoginPage extends React.Component {

    state = {
        login: ''
        , loggedIn: false
    }

    loginChange = (event) => {
        this.setState({login: event.target.value})
    }

    submit = (event) => {
        event.preventDefault();
        console.log(this.state.login)
        this.setState({loggedIn: true})
    }

    logout = () => {
        this.setState({login: '', loggedIn: false});
    }

    render() {

        if (!this.state.loggedIn) {
            return (
                <div>
                    <form onSubmit={this.submit}>
                        <div className='row padding-medium'>
                            <div className='small-6  large-7 columns padding-none'>
                                <input className='with-postfix' type="text" onChange={this.loginChange} name="LoginPage" placeholder="enter username"/>
                            </div>
                            <div className='small-6 large-5 padding-left-none columns'>
                                <button type="submit" className="postfix">Sign-in</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='small-12 columns'>
                        <p>Hello {this.state.login} <span onClick={this.logout} className="icon icon-exit" style={{fontSize: '2em', padding: '10px'}}></span></p>
                    </div>
                </div>
            )
        }


    }
}

export default LoginPage;
