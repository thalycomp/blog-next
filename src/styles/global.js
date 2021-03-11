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
    background: #fff;
    font-size: 1.8rem;
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