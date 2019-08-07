import React, { Component } from 'react';
// import { View } from 'react-native';
// import { LoginButton } from 'react-native-fbsdk';
import FacebookLogin from 'react-facebook-login';

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
        
        if(response.accessToken) {
            this.setState({isAuthenticated: true, user: {name: response.name, email: response.email}, token: response.accessToken})
        }
        // const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        // const options = {
        //     method: 'POST',
        //     body: tokenBlob,
        //     mode: 'cors',
        //     cache: 'default'
        // };
        // fetch('http://localhost:4000/api/v1/auth/facebook', options).then(r => {
        //     const token = r.headers.get('x-auth-token');
        //     r.json().then(user => {
        //         if (token) {
        //             this.setState({isAuthenticated: true, user, token})
        //         }
        //     });
        // })
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
                        appId="351079409153515"
                        autoLoad={true}
                        fields="name,email,picture"
                        // scope="public_profile,user_friends,user_actions.books"
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

export default Login;
