import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  :root {
    --main-bg-color: #ffffff;
    --color-primary-blue: rgb(3, 27, 181);
    --color-primary-blue-opacity: rgba(3, 27, 181, 0.5);
    --color-secondary-red: rgb(227, 7, 7);
    --color-accent-orange: rgba(247, 170, 71, 1);
    --footer-input-bg-color: #f4f2f2;
    --item-color: #474141;
    --text-color: #000000;
    --color-danger: rgb(248, 39, 39);

    --content-min-height: 100vh;
    --max-content-width: 1440px;

    --main-font: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    --font-size-base: 16px;
    --font-size-title: 50px;
    --font-weight-bold: 700;

    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 32px;
    --spacing-top: 50px;
    --spacing-padding: clamp(16px, 5vw, 64px);
    --spacing-extra-extra-large: 150px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: var(--main-font);
    font-size: var(--font-size-base);
    /* background-color: var(--main-bg-color); */
    color: var(--text-color);
  }

  a {
    text-decoration: none;
    color: var(--item-color);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  #root {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
`;

export default GlobalStyle;
