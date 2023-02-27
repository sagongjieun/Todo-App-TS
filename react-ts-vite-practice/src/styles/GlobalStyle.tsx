import * as React from "react";
import { Global, css } from "@emotion/react";

export interface IAppProps {}

export default function GlobalStyle(props: IAppProps) {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }

  body {
    background-color: #edebeb;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: initial;
    border-radius: 10px;
  }
`;
