import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Otp from './components/signup/Otp'
import Feed from './pages/Feed'
import FreindUpperProfile from './components/FriendRequest/FreindUpperProfile';
import FriendsPage from './pages/FriendsPage';
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/otp" component={Otp} ></Route>
        <Route path="/" component={Home} exact></Route>
        <Route path="/feed" component={Feed}></Route>
        <Route path="/friends" component={FriendsPage}></Route>
      </Router>
    );
  }
}

export default App;