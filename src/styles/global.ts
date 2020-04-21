import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/github-background.svg";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body,
  button,
  input {
    font: 1.6rem Roboto, sans-serif;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat  70% top;
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  input {
    border: 0;
  }

  #root{
    max-width:960px;
    margin:0 auto;
    padding:40px 20px;
  }
`;
