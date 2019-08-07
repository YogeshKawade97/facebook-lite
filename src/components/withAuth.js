import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default WrappedComponent => {
  class WithAuth extends Component {
    
    render() {
      if (this.props.isLoggedIn) return <WrappedComponent {...this.props} />;
      else
        return (
          <Redirect
            to={{
              pathname: '/login',
              search: `?redirectTo=${this.props.match.url}`
            }}
          />
        );
    }
  }

  const mapStateToProps = ({ auth }) => {
    return {
      isLoggedIn: auth.isLoggedIn
    };
  };

  return connect(mapStateToProps)(WithAuth);
};
