import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const renderAuthLinks = isLoggedIn => {
    return isLoggedIn ? (
      <NavLink className="item" to="/logout">
        LogOut
      </NavLink>
    ) : (
      <NavLink className="item" to="/login">
        Login
      </NavLink>
    );
  };

const Navigation = ({ isLoggedIn }) => {
    return isLoggedIn ? (
        <div className="ui secondary pointing menu">
          <NavLink exact to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/photo" className="item">
            View Photo
          </NavLink>
          <NavLink to="/profile" className="item">
            View Profile
          </NavLink>
          <NavLink to="/album" className="item">
            View Album
          </NavLink>
          <div className="right menu">
            <div className="ui item">{renderAuthLinks(isLoggedIn)}</div>
          </div>
        </div>
    ) : (
        <div className="ui secondary pointing menu">
          <NavLink exact to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/photo" className="item">
            View Photo
          </NavLink>
          <div className="right menu">
            <div className="ui item">{renderAuthLinks(isLoggedIn)}</div>
          </div>
        </div>
    )    
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn
  };
};
export default connect(mapStateToProps)(Navigation);
