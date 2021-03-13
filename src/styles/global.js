import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
    background: #fff;
    font-size: 1.8rem;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #fff;

    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;