import React, { Component } from 'react';

class PhotoSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        };
    }

    onSearchSubmitted = e => {
        e.preventDefault();
        this.props.onSearchSubmitted(this.state.searchTerm);
    };

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="ui form">
                <form className="ui form" onSubmit={this.onSearchSubmitted}>
                <div className="field">
                    { <label>Search: </label>
                    /*<input
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                        type="text"
                    /> */}
                    <div className="ui icon input">
                        <input  value={this.state.searchTerm}
                        onChange={this.handleChange} type="text" placeholder="Search..." />
                        <i className="search icon"></i>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

export default PhotoSearchBar;
