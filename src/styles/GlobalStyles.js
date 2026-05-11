import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Satoshi', sans-serif;
    overflow-x: hidden;
  }

  @font-face {
  font-family: 'PinyonScript';

  src: url('/fonts/PinyonScript-Regular.ttf')
    format('truetype');

  font-weight: 400;

  font-style: normal;

  font-display: swap;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export default GlobalStyles;