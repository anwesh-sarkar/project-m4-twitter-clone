import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import TweetActions from "./TweetActions";

const BigTweet = ({ tweetData }) => {
  const formattedDate = format(
    new Date(tweetData.timestamp),
    "hh:mm a '-' LLL do yyyy"
  );

  const [isLiked, setIsLiked] = React.useState(tweetData.isLiked);
  const [numLikes, setNumLikes] = React.useState(tweetData.numLikes);
  const [isRetweeted, setIsRetweeted] = React.useState(tweetData.isRetweeted);
  const [numRetweets, setNumRetweets] = React.useState(tweetData.numRetweets);

  //Need to implement the back button
  return (
    <Wrapper>
      <Avatar src={tweetData.author.avatarSrc} />
      <TweetWrapper>
        <TweetHead>
          <DisplayName>{tweetData.author.displayName}</DisplayName>
          <Handle>@{tweetData.author.handle}</Handle>
        </TweetHead>
        <TweetBody>
          <TweetContent>{tweetData.status}</TweetContent>
          <TweetImage
            src={tweetData.media.length > 0 ? tweetData.media[0].url : null}
          />
        </TweetBody>
        <TimeStamp> {formattedDate}</TimeStamp>
        <TweetActions
          tweetId={tweetData.id}
          isLiked={isLiked}
          isRetweeted={isRetweeted}
          setIsLiked={setIsLiked}
          setIsRetweeted={setIsRetweeted}
          numLikes={numLikes}
          setNumLikes={setNumLikes}
          numRetweets={numRetweets}
          setNumRetweets={setNumRetweets}
        />
      </TweetWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const TweetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`;

const TweetHead = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayName = styled.span`
  font-weight: 700;
  font-size: 1.1em;
`;

const Handle = styled.span`
  color: grey;
  margin-left: 5px;
  font-size: 15px;
`;

const TimeStamp = styled.span`
  color: grey;
  font-size: 15px;
  padding: 10px;
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetContent = styled.div`
  padding: 10px 0;
  line-height: 130%;
  font-size: 25px;
`;

const TweetImage = styled.img`
  max-width: 100%;
  position: relative;
  border-radius: 20px;
  max-height: 100%;
  object-fit: fill;
`;

export default BigTweet;
