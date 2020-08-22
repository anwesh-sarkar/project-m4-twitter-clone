import React from "react";

export const FeedContext = React.createContext(null);

export const FeedContextProvider = ({ children }) => {
  const [feed, setFeed] = React.useState(null);
  const [feedStatus, setFeedStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch("/api/me/home-feed", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json ",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeed(data);
        setFeedStatus("loaded");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <FeedContext.Provider value={{ feed, setFeed, feedStatus, setFeedStatus }}>
      {children}
    </FeedContext.Provider>
  );
};
