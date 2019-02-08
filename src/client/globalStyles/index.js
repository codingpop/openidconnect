import styled, { createGlobalStyle } from 'styled-components';

import cssReset from './cssReset';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Overpass+Mono:300,400,600,700&subset=latin-ext');

  ${cssReset}

  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: 'Overpass Mono', monospace;
    background-color: #fff;
    color: #9B9B9B;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default GlobalStyles;
