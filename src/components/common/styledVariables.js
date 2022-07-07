import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  ::selection {
    background: rgba(122, 122, 122, 0.6);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, Open-Sans, Arial, Sans-Serif;
  }
`;

const variables = {

  /* variables */

  clr_accent: '#08b36c',
  clr_accent_hover: '#058751',
  clr_additional: '#686868',

  'light': {
    clr_background: '#f5f5f8',
    clr_text: '#262626',
  },

  'dark': {
    clr_background: '#212128',
    clr_text: '#eeecec',
  },


  /* media queries */

  media_mobile: '(max-width: 766px)',
  media_tablet: '(min-width: 767px)',
  media_desctop: '(min-width: 1200px)',


  /* animations */

  animation_rotate: `
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
}

export {variables as c}