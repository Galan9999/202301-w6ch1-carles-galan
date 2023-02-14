import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, 
*:after,
*:before {
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: none;
  }
body {
  padding: 20px;
  background-color: #fff;
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
}
ol, ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
