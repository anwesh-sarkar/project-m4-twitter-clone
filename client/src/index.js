import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CurrentUserProvider } from "./CurrentUserContext";
import { FeedContextProvider } from "./FeedContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* UserProvider needs to wrap App, so the context provider can be used in App */}

    <CurrentUserProvider>
      <FeedContextProvider>
        <App />
      </FeedContextProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
