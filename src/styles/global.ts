import { createGlobalStyle } from "styled-components";

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
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  input {
    border: 0;
  }
`;
