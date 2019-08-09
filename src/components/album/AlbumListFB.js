import React, { Component } from 'react';
import { connect } from 'react-redux';
import FBApi from '../../api/fbapi';
// import { FB_TOKEN } from '../../config/config';

const FB_TOKEN = localStorage.getItem('token') === "undefined" ? JSON.parse(localStorage.getItem('FBDATA')).token : localStorage.getItem('token');
console.log('FB_TOKEN > ',FB_TOKEN);
class AlbumListFB extends Component {

    state = {
        pictures: [],
        FB_TOKEN: localStorage.getItem('token') === "undefined" ? JSON.parse(localStorage.getItem('FBDATA')).token : localStorage.getItem('token')
    };
    
    async componentDidMount() {
        const response = await FBApi.get('/me/albums/', {
            params: {
                access_token: this.state.FB_TOKEN
            }
        });
        // console.log('componentDidMount > ');console.log(response);
        this.setState({
            pictures: response.data.data
        });
    }

    showImage = id => {
        this.props.history.push(`/album/${id}`);
    };

    render() {
        return this.state.pictures.map(picture => {
            return (
                <div key={picture.id} className="ui card">
                    <div className="image">
                        <img src={'https://graph.facebook.com/'+picture.id+'/picture?access_token='+this.state.FB_TOKEN} alt="something" />
                    </div>
                    <div className="extra content">
                        {picture.name}
                        <div className="ui buttons">
                            <div
                                onClick={() => this.showImage(picture.id)}
                                className="ui basic green button"
                            >
                                Show
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }    
}

const mapStateToProps = state => {
    return {
      token: state.auth.token
    };
 };
export default connect(mapStateToProps)(AlbumListFB);
// export default AlbumListFB;