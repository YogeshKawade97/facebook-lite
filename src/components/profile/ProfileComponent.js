import React from 'react';
import { connect } from 'react-redux';

const ProfileComponent = ({ profileInfo }) => {
    var profileDataInfo = '';
    if(profileInfo) {
        profileDataInfo = profileInfo;
    } else {
        profileDataInfo = JSON.parse(localStorage.getItem('FBDATA')).user;
    }
    return (        
        <table className="ui celled table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{profileDataInfo.name}</td>
                    <td>{profileDataInfo.email}</td>
                </tr>
            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    return {
      profileInfo: state.auth.user
    };
 };
export default connect(mapStateToProps)(ProfileComponent);