import React, {Component} from 'react';
import FBApi from '../../api/fbapi';
// import { FB_TOKEN } from '../../config/config';

const FB_TOKEN = localStorage.getItem('token') === "undefined" ? JSON.parse(localStorage.getItem('FBDATA')).token : localStorage.getItem('token');

class AlbumDetails extends Component {  
    state = {
        imageData: [],
        FB_TOKEN: localStorage.getItem('token') === "undefined" ? JSON.parse(localStorage.getItem('FBDATA')).token : localStorage.getItem('token')
    };

    async componentDidMount() {
        const imageId = this.props.match.params.id;        
        const response = await FBApi.get(`/${imageId}/photos/`, {
          params: {
              fields: 'source,url,place',
              access_token: this.state.FB_TOKEN
          }
        });
        this.setState({
          imageData: response.data.data
        });
      }

      render() {
        return this.state.imageData.map(image => {
          return (
              <div key={image.id} className="ui card">
                  <div className="image">
                    <img width="1000" src={image.source} alt="something" />
                  </div>                  
              </div>
          )
        });
      }
}

export default AlbumDetails;