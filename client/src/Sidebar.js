import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

import { NavLink } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { BsPerson, BsBookmark } from "react-icons/bs";
import Bookmarks from "./Bookmarks";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { COLORS } from "./constants";

//This part creates the Sidebar with all the links. Clicking on each link is supposed to display the component to the side. I guess that is solved with Fetching user data section. The Components tag defines each component with its icon that is being pulled from react-icons.
const Sidebar = () => {
  return (
    <Wrapper>
      <GlobalStyles />

      <Image src={logo} alt="cat-logo" />

      <NavigationLink exact to="/">
        <Components>
          <AiOutlineHome />
          <Homefeed />
        </Components>
      </NavigationLink>

      <NavigationLink to="/notifications">
        <Components>
          <AiOutlineBell />
          <Notifications />
        </Components>
      </NavigationLink>

      <NavigationLink to="/bookmarks">
        <Components>
          <BsBookmark />
          <Bookmarks />
        </Components>
      </NavigationLink>

      <NavigationLink to="/:profileId">
        <Components>
          <BsPerson />
          <Profile />
        </Components>
      </NavigationLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 12px;
  &.active {
    color: ${COLORS.primary};
  }
  &:hover {
    border: 1px solid grey;
    border-radius: 10px;
    color: ${COLORS.primary};
    background-color: lightgrey;
  }
`;

const Components = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  height: 75px;
  width: 60px;
`;

export default Sidebar;
