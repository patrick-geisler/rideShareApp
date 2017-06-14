import React from 'react';
import {connect} from 'react-redux'

import axios from 'axios'

import FacebookLogin from 'react-facebook-login'

class LoginPage extends React.Component {

    state = {
        login: ''
        , loggedIn: false
    }

    logout = () => {
        this.setState({user: {}, loggedIn: false});
        this.props.dispatch({
            type: 'FB_LOGOUT'
            , loggedInUser: {}
        })
    }

    responseFacebook = (response) => {
      console.log('LoginPage.responseFacebook()', response);
      const loggedInUser = {
          source: 'facebook'
          , sourceId: response.id
          , name: response.name
          , picURL: response.picture.data.url
          , acccessToken: response.accessToken
      }

      axios
        .post('/api/users', loggedInUser)
        .then(response => {
            console.log('LoginPage.responseFacebook() user -->', response.data);
            const loggedInUser = response.data;
            this.setState({
                user: loggedInUser
                , loggedIn: true
            })

            this.props.dispatch({
                type: 'FB_LOGIN'
                , loggedInUser
            })
        })

    };

    render() {

        if (!this.state.loggedIn) {
            return (
                <div>
                    <FacebookLogin
                        appId="170842543452027"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook} />
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='small-12 columns'>
                        <p>{this.state.user.name} <img src={this.state.user.picURL} alt='pic' /> <span onClick={this.logout} className="icon icon-exit" style={{fontSize: '2em', padding: '10px'}}></span></p>
                    </div>
                </div>
            )
        }


    }
}

export default connect()(LoginPage);
