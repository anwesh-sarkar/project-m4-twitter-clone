import React from "react";
import styled from "styled-components";
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineMessage,
} from "react-icons/ai";

const TweetActions = ({
  isLiked,
  isRetweeted,
  setIsLiked,
  setIsRetweeted,
  numLikes,
  setNumLikes,
  numRetweets,
}) => {
  return (
    <Wrapper>
      <StyledButton>
        <AiOutlineMessage size={25} />
      </StyledButton>
      <StyledButton>
        <AiOutlineHeart size={25} />
        {numLikes > 0 ? <span>{numLikes}</span> : null}
      </StyledButton>
      <StyledButton>
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
  max-width: 80%;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: grey;
`;

export default TweetActions;
