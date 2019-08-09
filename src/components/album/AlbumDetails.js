import React, {Component} from 'react';
import FBApi from '../../api/fbapi';
import { Carousel } from "react-responsive-carousel";

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
        var photoDiv = this.state.imageData.map(image => {
          return (              
            <div className="image">
              <img width="100" src={image.source} alt="something" />
            </div>              
          )
        });

        return (
          <Carousel autoPlay>
              {photoDiv}
          </Carousel>
        )
      }
}

export default AlbumDetails;