import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

    @font-face {
    font-family: "Montserrat-Thin";
    src: url("/fonts/Montserrat-Thin.ttf")
  }

    @font-face {
    font-family: "Montserrat-Bold";
    src: url("/fonts/Montserrat-Bold.ttf")
    }
    
    @font-face {
    font-family: "Mulish";
    src: url("/fonts/Mulish.ttf")
  }
  `;
