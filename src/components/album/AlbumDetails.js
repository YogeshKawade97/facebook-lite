import React, {Component} from 'react';
import pexels from '../../api/pexel';

class AlbumDetails extends Component {
    state = {
        imageUrl: null
    };

    async componentDidMount() {
        console.log(' componentDidMount ');
        const imageId = this.props.match.params.id;
        const response = await pexels.get(`/photos/${imageId}`);
        console.log(response);
        this.setState({
          imageUrl: response.data.src.original
        });
      }
      render() {
        return this.state.imageUrl ? (
          <img width="800" src={this.state.imageUrl} alt="something" />
        ) : (
          <div>Loading....</div>
        );
      }s

}

export default AlbumDetails;