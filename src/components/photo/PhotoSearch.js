import React, { Component } from 'react';
import PhotoSearchBar from './PhotoSearchBar';
import pexelsApi from '../../api/pexel';
import PhotoList from './PhotoList';

class PhotoSearch extends Component {
    state = {
        images: []
    };

    searchSubmitted = async searchTerm => {
      const response = await pexelsApi.get('/search', {
        params: {
          query: searchTerm
        }
      });
      this.setState({
        images: response.data.photos
      });
    }

    render() {
        return (
            <div className="ui container">
              <PhotoSearchBar onSearchSubmitted={this.searchSubmitted} />
              <PhotoList images={this.state.images} />
            </div>
          );
    }
}

export default PhotoSearch;

