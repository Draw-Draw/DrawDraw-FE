import { createGlobalStyle } from 'styled-components';
import SSMullaeler from '../assets/fonts/SSMullaeler.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SSMullaeler';
    src: local('SSMullaeler'), local('SSMullaeler');
        font-style: normal;
        src: url(${SSMullaeler}) format('truetype');
  }
`;
