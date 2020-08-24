import React from "react";
import styled from "styled-components";
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineMessage,
} from "react-icons/ai";

const TweetActions = ({
  tweetId,
  isLiked,
  isRetweeted,
  setIsLiked,
  setIsRetweeted,
  numLikes,
  setNumLikes,
  numRetweets,
  setNumRetweets,
}) => {
  // this likes or unlikes a tweet. numLikes increases or decreases by 1 based on liking or unliking.
  const likeTweet = () => {
    if (isLiked) {
      setIsLiked(!isLiked);
      setNumLikes(numLikes - 1);
    } else {
      setIsLiked(!isLiked);
      setNumLikes(numLikes + 1);
    }
    fetch(`/api/tweet/${tweetId}/like`, {
      method: "PUT",
      body: JSON.stringify({
        like: !isLiked,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  //this function is just to click on the retweet button. I am not implementing retweet.
  const retweet = () => {
    if (isRetweeted) {
      setIsRetweeted(!isRetweeted);
      setNumRetweets(numRetweets - 1);
    } else {
      setIsRetweeted(!isRetweeted);
      setNumRetweets(numRetweets + 1);
    }
    fetch(`/api/tweet/${tweetId}/retweet`, {
      method: "PUT",
      body: JSON.stringify({
        retweet: !isRetweeted,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Wrapper>
      <StyledButton>
        <AiOutlineMessage size={25} />
      </StyledButton>
      <StyledButton onClick={likeTweet}>
        <AiOutlineHeart size={25} fill={isLiked ? "red" : ""} />
        {numLikes > 0 ? <span>{numLikes}</span> : null}
      </StyledButton>
      <StyledButton onClick={retweet}>
        <AiOutlineRetweet size={25} />
        {numRetweets > 0 ? <span>{numRetweets}</span> : null}
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: grey;
`;

export default TweetActions;
