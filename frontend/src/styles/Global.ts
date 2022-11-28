import styled, { createGlobalStyle } from "styled-components";
import GeneralSansRegularWoff2 from "../assets/fonts/GeneralSans-Regular.woff2";
import GeneralSansRegularWoff from "../assets/fonts/GeneralSans-Regular.woff";
import GeneralSansRegularTtf from "../assets/fonts/GeneralSans-Regular.ttf";
import GeneralSansMediumWoff2 from "../assets/fonts/GeneralSans-Medium.woff2";
import GeneralSansMediumWoff from "../assets/fonts/GeneralSans-Medium.woff";
import GeneralSansMediumTtf from "../assets/fonts/GeneralSans-Medium.ttf";
import GeneralSansSemiboldWoff2 from "../assets/fonts/GeneralSans-Semibold.woff2";
import GeneralSansSemiboldWoff from "../assets/fonts/GeneralSans-Semibold.woff";
import GeneralSansSemiboldTtf from "../assets/fonts/GeneralSans-Semibold.ttf";

export const Global = createGlobalStyle`
@font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansRegularWoff2}') format('woff2'),
          url('${GeneralSansRegularWoff}') format('woff'),
          url('${GeneralSansRegularTtf}') format('truetype');
  }
  @font-face {
    font-family: 'GeneralSans';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansMediumWoff2}') format('woff2'),
          url('${GeneralSansMediumWoff}') format('woff'),
          url('${GeneralSansMediumTtf}') format('truetype');
  }
  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansSemiboldWoff2}') format('woff2'),
          url('${GeneralSansSemiboldWoff}') format('woff'),
          url('${GeneralSansSemiboldTtf}') format('truetype');
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
}

:root {
    --white: #ffffff;
    --gray-100: #F2F2F2;
    --gray-200: #CCCCCC;
    --gray-300: #999999;
    --gray-400: #666666;
    --gray-500: #333333;

    --background: #F0F4F8;

    --theme: #D73035;
    --primary: #8A1114;
    --secondary: #FFABAD;
}

@media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

body{
    background: var(--background);
    color: var(--gray-500);
}

body,
input,
textarea,
select,
button {
    font: 400 1rem GeneralSans, sans-serif;
}

button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

a {
    color: inherit;
    text-decoration: none;
}
`;
