import React, { Component } from 'react';
import FBApi from '../../api/fbapi';

class AlbumListFB extends Component {

    state = {
        pictures: []
    };

    // componentDidMount() {
    //     fetch("https://graph.facebook.com/me/albums?access_token=EAAMCI8BuacIBAAEbG8J1KP5Y0Lk5hL20fAux5dFenAaWqiq5PPG6DhSEOtzZCgoKZBvvUt0XoLq9rSZCok8bewLVg1ceG82bZCwoj0QVKoZBspqZBA4Cjh738GKZCFNBwhH3OBRtfxOz08EPRhthFT2pYURlkvkDiPcS85cJOeIQxJtgk6mZBrZBrHUiScRr3zXVlxDYsRbSKrNyZBrBfHI475")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //             console.log(result);
    //           this.setState({
    //             pictures: result.data
    //           });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }
    
    async componentDidMount() {
        const response = await FBApi.get(`/me/albums/`);
        console.log(response);
        this.setState({
            pictures: response.data
        });
    }

    showImage = id => {
        console.log(' showImage '+id);
        this.props.history.push(`/album/${id}`);
    };
//Object { created_time: "2019-08-08T12:36:18+0000", name: "Test", id: "107727780580608" }
    render() {
        return this.state.pictures.map(picture => {
            console.log(' picture > ');console.log(picture);
            return (
                <div key={picture.id} className="ui card">
                    <div className="image">
                        <img src={'https://graph.facebook.com/'+picture.id+'/picture?access_token=EAAMCI8BuacIBAAEbG8J1KP5Y0Lk5hL20fAux5dFenAaWqiq5PPG6DhSEOtzZCgoKZBvvUt0XoLq9rSZCok8bewLVg1ceG82bZCwoj0QVKoZBspqZBA4Cjh738GKZCFNBwhH3OBRtfxOz08EPRhthFT2pYURlkvkDiPcS85cJOeIQxJtgk6mZBrZBrHUiScRr3zXVlxDYsRbSKrNyZBrBfHI475'} alt="something" />
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

export default AlbumListFB;