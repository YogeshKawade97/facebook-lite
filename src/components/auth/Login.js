import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import FacebookLogin from 'react-facebook-login';
import { LoginUser } from '../../actions/authAction';
import { APP_ID } from '../../config/config';

class Login extends Component {

    constructor() {
        super();
        this.state = { 
            isAuthenticated: false, 
            user: null,
            token: ''
        };
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };

    responseFacebook = (response) => {
        console.log(response);
        // console.log(' RESPONSE FROM LOGIN > ');console.log(response);
        const queryParams = queryString.parse(this.props.location.search);

        if(response.accessToken) {
            this.setState({isAuthenticated: true, user: {name: response.name, email: response.email}, token: response.accessToken})
        }

        this.props.LoginUser(this.state.user, this.state.token, () => {
            if (queryParams.redirectTo) {
              this.props.history.push(queryParams.redirectTo);
            } else {
              this.props.history.push('/');
            }
        });
        
    }

    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>                    
                    <FacebookLogin
                        appId= {APP_ID} //351079409153515
                        autoLoad={false}
                        scope="public_profile,user_friends,user_photos"
                        fields="name,email,picture"                        
                        callback={this.responseFacebook} 
                    />                    
                </div>
            );

        return (
            <div className="App">
                {content}
            </div>
        );    



    }
}

export default connect(
    null,
    { LoginUser }
  )(Login);
