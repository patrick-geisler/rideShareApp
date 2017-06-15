import React from 'react';
import {connect} from 'react-redux'

import axios from 'axios'

// import FacebookLogin from 'react-facebook-login'

import {firebaseFaceBookLogin} from './FirebaseFacebookLogin'

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

    facebookLogin = () => {
        console.log('LoginPage.facebookLogin()')
        firebaseFaceBookLogin
        .signIn()
        .then(result => {
            console.log('FirebaseFacebookLogin.signIn() result -->', result);
            if (result.credential) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // ...
            }
            // The signed-in user info.
            var user = result.user;
            console.log('result', result)
            const loggedInUserFromFB = {
                source: 'facebook'
                , sourceId: result.additionalUserInfo.profile.id
                , name: result.additionalUserInfo.profile.name
                , picURL: result.additionalUserInfo.profile.picture.data.url
                , acccessToken: result.credential.accessToken
            }
            console.log('FirebaseFacebookLogin.signIn() loggedInUserFromFB -->', loggedInUserFromFB);
            axios
              .post('/api/users', loggedInUserFromFB)
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


        }).catch(error => {
            console.log('FirebaseFacebookLogin.signIn() error -->', error);

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    render() {

        if (!this.state.loggedIn) {
            return (
                <div>
                    <button onClick={this.facebookLogin}>Facebook</button>
                    {/* <FacebookLogin
                        appId="170842543452027"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook} /> */}
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
