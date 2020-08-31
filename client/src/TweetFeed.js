// This file is to display all the tweets on Homefeed
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";
import TweetActions from "./TweetActions";

const TweetFeed = ({
  tweetId,
  displayName,
  avatar,
  handle,
  tweetContent,
  timeStamp,
  image,
  liked,
  retweeted,
  numOfLikes,
  numRetweets,
}) => {
  let history = useHistory();

  function handleTweetClick() {
    history.push(`/tweet/${tweetId}`);
  }

  const [isLiked, setIsLiked] = React.useState(liked);
  const [numLikes, setNumLikes] = React.useState(numOfLikes);
  const [isRetweeted, setIsRetweeted] = React.useState(retweeted);
  const [numOfRetweets, setNumRetweets] = React.useState(numRetweets);
  const formattedDate = format(new Date(timeStamp), "LLL do");
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <TweetWrapper>
        <TweetBodyWrapper
          tabIndex="0"
          onClick={handleTweetClick}
          onKeyDown={(ev) => {
            if (ev.key === "Space" || ev.key === "Enter") {
              handleTweetClick();
            }
          }}
        >
          <TweetHead>
            <DisplayName>{displayName}</DisplayName>
            <Handle>@{handle}</Handle>
            <TimeStamp> - {formattedDate}</TimeStamp>
          </TweetHead>
          <TweetBody>
            <TweetContent>{tweetContent}</TweetContent>
            <TweetImage src={image} />
          </TweetBody>
        </TweetBodyWrapper>
        <TweetActions
          tweetId={tweetId}
          isLiked={isLiked}
          isRetweeted={isRetweeted}
          setIsLiked={setIsLiked}
          setIsRetweeted={setIsRetweeted}
          numLikes={numLikes}
          setNumLikes={setNumLikes}
          numRetweets={numOfRetweets}
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
`;

const TweetBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`;

const TweetHead = styled.div`
  display: flex;
  flex-direction: row;
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
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetContent = styled.div`
  padding: 10px 0;
  line-height: 130%;
  font-size: 18px;
`;

const TweetImage = styled.img`
  max-width: 80%;
  position: relative;
  border-radius: 20px;
  max-height: 80%;
  object-fit: fill;
`;

export default TweetFeed;
