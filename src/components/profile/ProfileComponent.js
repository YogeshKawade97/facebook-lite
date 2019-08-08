import React from 'react';
import { connect } from 'react-redux';

const ProfileComponent = ({ profileInfo }) => {
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
                    <td>{profileInfo.name}</td>
                    <td>{profileInfo.email}</td>
                </tr>
            </tbody>
        </table>
    );
}


// ProfileComponent.defaultProps = {
//     profileInfo: 
//       {
//         name: 'Yogesh Kawade',
//         email: 'test@test.com'
//       }
// };

const mapStateToProps = state => {
    return {
      profileInfo: state.auth.user
    };
 };
export default connect(mapStateToProps)(ProfileComponent);