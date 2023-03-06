import * as React from "react";
import { Global, css } from "@emotion/react";

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    background-color: #edebeb;
  }
`;
