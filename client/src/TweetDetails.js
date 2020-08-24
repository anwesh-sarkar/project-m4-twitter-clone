import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import BigTweet from "./BigTweet";

const TweetDetails = () => {
  let { tweetId } = useParams();

  const [loadStatus, setLoadStatus] = React.useState("loading");
  const [tweetData, setTweetData] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweetData(data.tweet);
        setLoadStatus("loaded");
      });
  }, [tweetId]);

  return (
    <div>
      {loadStatus === "loading" ? (
        <LoadingSpinner />
      ) : (
        <BigTweet tweetData={tweetData} />
      )}
    </div>
  );
};

export default TweetDetails;
