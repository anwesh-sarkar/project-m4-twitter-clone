import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { IconName } from "react-icons/fi";
import Bookmarks from "./Bookmarks";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";

// Basically the main application. The switch helps in identifying which route/path to go and display corresponding information
const App = () => {
  return (
    <div>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Homefeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route path="/:profileId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
