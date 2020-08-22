import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants";
import { FeedContext } from "./FeedContext";

const TweetCompose = ({ avatarSrc }) => {
  const { setFeed } = React.useContext(FeedContext);
  const [charCount, setCharCount] = React.useState(280);
  const [colour, setColour] = React.useState("grey");
  const [tweetStatus, setTweetStatus] = React.useState("");

  // Called after tweet is published to refresh the Home Feed
  const handleAfterPublishTweet = () => {
    fetch("/api/me/home-feed", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeed(data);
        setTweetStatus("");
      })
      .catch((err) => console.log(err));
  };

  // Post or publish tweet. We are posting the data to api and calling handleAfterPublishTweet to refresh the HomeFeed to show the new tweet.
  const PostTweet = () => {
    fetch(`/api/tweet`, {
      method: "POST",
      body: JSON.stringify({ status: tweetStatus }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleAfterPublishTweet();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <Avatar src={avatarSrc} />
      <TweetComposeBox>
        {/* So, basically, here I am grabbing the length of the event target value and subtracting it from 280. JS is so smart. If charCount>55 but <280, colour is grey. If <55 &&>=0,colour is yellow and so on. The Meow button is disabled if charCount <0. The value is the text area is captured in Tweet Status. */}
        <TextArea
          onChange={(ev) => {
            setTweetStatus(ev.target.value);
            setCharCount(280 - ev.target.value.length);
            setColour("grey");
            if (
              280 - ev.target.value.length < 55 &&
              280 - ev.target.value.length >= 0
            ) {
              setColour("#C6BE27");
            } else if (280 - ev.target.value.length < 0) {
              setColour("red");
            }
          }}
        ></TextArea>
        <ButtonComponent>
          <CharCount style={{ color: colour }}>{charCount}</CharCount>
          <TweetPostButton onClick={PostTweet} disabled={charCount < 0}>
            Meow
          </TweetPostButton>
        </ButtonComponent>
      </TweetComposeBox>
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
const TweetComposeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 80%;
`;
const TextArea = styled.textarea`
  position: relative;
  width: 95%;
  height: 250px;
  border: none;
  padding: 10px;
  font-size: 25px;
`;
const TweetPostButton = styled.button`
  position: relative;
  height: 50px;
  width: 100px;
  background-color: ${COLORS.primary};
  color: white;
  outline: none;
  border-radius: 20px;
  font-size: 20px;
  &:disabled {
    opacity: 0.5;
  }
`;

const ButtonComponent = styled.div`
  display: flex;
  flex-direction: row;
`;

const CharCount = styled.span`
  padding: 10px;
`;
export default TweetCompose;
