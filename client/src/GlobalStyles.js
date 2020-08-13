import React from "react";
import { createGlobalStyle } from "styled-components";

// Global styles to be applied on the entire application
const GlobalStyles = createGlobalStyle`

img{
  border-radius:10px;
}

h1{
  font-size:32px;
}

p,div{
  font-size: 20px;
}

*{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export default GlobalStyles;
