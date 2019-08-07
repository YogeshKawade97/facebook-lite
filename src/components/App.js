import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './common/Navigation';
import HomeComponent from './home/HomeComponent';
import ProfileComponent from './profile/ProfileComponent';
import AlbumSearch from './album/AlbumSearch';
import AlbumDetails from './album/AlbumDetails';
import Login from './auth/Login';
import withAuth from './withAuth'

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/profile" component={withAuth(ProfileComponent)} />
          <Route exact path="/album" component={withAuth(AlbumSearch)} />
          <Route exact path="/login" component={Login} />
          <Route path="/album/:id" component={withAuth(AlbumDetails)} />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
