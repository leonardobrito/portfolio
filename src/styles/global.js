import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    /* background: #15b0d2; */
    /* background: #374045; */
    background: #282a35;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
  button {
    cursor: pointer;
  }
`;
