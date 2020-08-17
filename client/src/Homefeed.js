import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { COLORS } from "./constants";
import { FeedContext } from "./FeedContext";
import Tweet from "./Tweet";

const Homefeed = () => {
  const { feed, feedStatus } = React.useContext(FeedContext);
  if (feedStatus === "loading") {
    return (
      <ReactLoading
        type="spin"
        color={COLORS.primary}
        height={"15%"}
        width={"10%"}
      />
    );
  } else {
    return (
      <Wrapper>
        {feed.tweetIds.map((tweetId, index) => {
          const allTweets = feed.tweetsById[tweetId];
          console.log(allTweets);
          return (
            <Tweet
              key={tweetId + index}
              displayName={allTweets.author.displayName}
              avatar={allTweets.author.avatarSrc}
              handle={allTweets.author.handle}
              tweetContent={allTweets.status}
              timeStamp={allTweets.timestamp}
              image={allTweets.media.length > 0 ? allTweets.media[0].url : null}
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
`;
export default Homefeed;
