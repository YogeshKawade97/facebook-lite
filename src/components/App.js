import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './common/Navigation';
import HomeComponent from './home/HomeComponent';
import ProfileComponent from './profile/ProfileComponent';
// import AlbumSearch from './album/AlbumSearch';
import AlbumListFB from './album/AlbumListFB';
import AlbumDetails from './album/AlbumDetails';
import PhotoSearch from './photo/PhotoSearch';
// import PhotoList from './photo/PhotoList';
import PhotoDetails from './photo/PhotoDetails';
import Login from './auth/Login';
import withAuth from './withAuth'
import Logout from './auth/Logout';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/profile" component={withAuth(ProfileComponent)} />
          <Route exact path="/album" component={withAuth(AlbumListFB)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/album/:id" component={withAuth(AlbumDetails)} />
          <Route exact path="/photo" component={PhotoSearch} />
          <Route path="/photo/:id" component={PhotoDetails} />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
