import React from "react";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { CurrentUserContext } from "./CurrentUserContext";
import { FeedContext } from "./FeedContext";
import TweetFeed from "./TweetFeed";
import TweetCompose from "./TweetCompose";

const Homefeed = () => {
  const { currentUser, status } = React.useContext(CurrentUserContext);
  const { feed, feedStatus } = React.useContext(FeedContext);
  if (feedStatus === "loading") {
    return <LoadingSpinner />;
  } else {
    return (
      <Wrapper>
        <h2>Home</h2>
        <TweetCompose avatarSrc={currentUser.profile.avatarSrc} />
        {feed.tweetIds.map((tweetId, index) => {
          const allTweets = feed.tweetsById[tweetId];
          console.log(tweetId);
          return (
            <TweetFeed
              key={tweetId + index}
              tweetId={tweetId}
              displayName={allTweets.author.displayName}
              avatar={allTweets.author.avatarSrc}
              handle={allTweets.author.handle}
              tweetContent={allTweets.status}
              timeStamp={allTweets.timestamp}
              image={allTweets.media.length > 0 ? allTweets.media[0].url : null}
              liked={allTweets.isLiked}
              retweeted={allTweets.isRetweeted}
              numOfLikes={allTweets.numLikes}
              numRetweets={allTweets.numRetweets}
            />
          );
        })}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  padding: 10px;
`;
export default Homefeed;
