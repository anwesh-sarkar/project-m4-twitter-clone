// This file is to display all the tweets on Homefeed
import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import TweetActions from "./TweetActions";

const TweetFeed = ({
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
  const [isLiked, setIsLiked] = React.useState(liked);
  const [numLikes, setNumLikes] = React.useState(numOfLikes);
  const [isRetweeted, setIsRetweeted] = React.useState(retweeted);
  const formattedDate = format(new Date(timeStamp), "LLL Do");
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <TweetWrapper>
        <TweetHead>
          <DisplayName>{displayName}</DisplayName>
          <Handle>@{handle}</Handle>
          <TimeStamp> - {formattedDate}</TimeStamp>
        </TweetHead>
        <TweetBody>
          <TweetContent>{tweetContent}</TweetContent>
          <TweetImage src={image} />
        </TweetBody>
        <TweetActions
          isLiked={isLiked}
          isRetweeted={isRetweeted}
          setIsLiked={setIsLiked}
          setIsRetweeted={setIsRetweeted}
          numLikes={numLikes}
          setNumLikes={setNumLikes}
          numRetweets={numRetweets}
        />
      </TweetWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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
