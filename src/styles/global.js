import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 585px) {
      html {
        font-size: 40%;
      }
  }

  @media (max-width: 400px) {
      html {
        font-size: 38%;
      }
  }

  body {
    font-size: 1.6rem;
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