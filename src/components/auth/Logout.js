import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LogoutUser } from '../../actions/authAction';

class Logout extends Component {
    componentDidMount() {
      setTimeout(() => {
        this.props.LogoutUser(() => {
          this.props.history.replace('/');
        });
      }, 2000);
    }
    render() {
      return <div>Please wait...we are logging you out</div>;
    }
}
  
  export default connect(
    null,
    { LogoutUser }
  )(Logout);