import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";
import { FeedContext } from "./FeedContext";
import LoadingSpinner from "./LoadingSpinner";
import Bookmarks from "./Bookmarks";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";
import Sidebar from "./Sidebar";

// Basically the main application. The switch helps in identifying which route/path to go and display corresponding information
const App = () => {
  const { status } = React.useContext(CurrentUserContext);
  if (status === "loading") {
    // If Status is loading, using a ReactLoading component to load a spinner. React css styles are weird.
    return <LoadingSpinner />;
  } else {
    return (
      <Wrapper>
        <GlobalStyles />
        {/* Sidebar needs to be defined within Router because an application cannot have more than one Router - this also shows that when I switch tabs on Sidebar, the corresponding static component is delivered */}
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Homefeed />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route exact path="/:profileId">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default App;
