import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Tweet = ({
  displayName,
  avatar,
  handle,
  tweetContent,
  timeStamp,
  image,
}) => {
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
  font-size: 0.9em;
  margin-left: 5px;
`;

const TimeStamp = styled.span`
  color: grey;
  font-size: 0.9em;
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetContent = styled.div`
  padding: 10px 0;
  line-height: 130%;
`;

const TweetImage = styled.img`
  width: 80%;
  border-radius: 8%;
  height: 400px;
  object-fit: fill;
`;

export default Tweet;
