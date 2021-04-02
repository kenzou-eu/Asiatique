import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 60%;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    width: 100%;
    min-height: 100vh;
    background: #AA3F1A;
    padding-top: 2.7rem;
    /* padding: 5.5rem 0rem 0rem 8.7rem; */
  }

`