import React, { Component } from 'react';

class AlbumSearch extends Component {
    state = {
        images: []
    };
    render() {
        return (
            <div className="ui container">
              {/* <SearchBar onSearchSubmitted={this.searchSubmitted} />
              <ImageList images={this.state.images} /> */}
            </div>
          );
    }
}

export default AlbumSearch;

