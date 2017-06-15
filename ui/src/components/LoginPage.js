import React from 'react';
import {connect} from 'react-redux'

import axios from 'axios'

// import FacebookLogin from 'react-facebook-login'

import {firebaseConnection} from './FirebaseConnection'

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
        firebaseConnection.writeData()
        firebaseConnection
        .facebookSignIn()
        .then(result => {
            console.log('FirebaseFacebookLogin.signIn() result -->', result);
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
