import {createGlobalStyle} from 'styled-components'

import backgroundImage from '../assets/background-git-logo.svg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%
  }

  body {
    background-color: #f0f0f5;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: 75% 0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    border: 1px solid;
  }
`