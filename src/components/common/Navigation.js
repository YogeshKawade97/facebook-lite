import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../auth/Login';

const renderAuthLinks = isLoggedIn => {
    return isLoggedIn ? (
      <NavLink className="item" to="/logout">
        LogOut
      </NavLink>
    ) : (
    //   <NavLink className="item" to="/login">
    //     Login
    //   </NavLink>
        <Login/>
    );
  };

const Navigation = ({ isLoggedIn }) => {
    return (
        <div className="ui secondary  menu">
          <NavLink exact to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/profile" className="item">
            View Profile
          </NavLink>
          <NavLink to="/album" className="item">
            View Album
          </NavLink>
          <div className="right menu">
            {/* <div className="item">
                <Dashboard />
            </div> */}
            <div className="ui item">{renderAuthLinks(isLoggedIn)}</div>
          </div>
        </div>
      );
}

export default Navigation;
