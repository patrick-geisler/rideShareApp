import React from 'react';
import FacebookLogin from 'react-facebook-login'

class LoginPage extends React.Component {

    state = {
        login: ''
        , loggedIn: false
    }

    logout = () => {
        this.setState({user: {}, loggedIn: false});
    }

    responseFacebook = (response) => {
      console.log(response);
      this.setState({
          user: {
              source: 'facebook'
              , id: response.id
              , name: response.name
              , picURL: response.picture.data.url
              , acccessToken: response.acccessToken
          }
          , loggedIn: true
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

export default LoginPage;
