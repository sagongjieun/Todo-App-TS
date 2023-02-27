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
  }
`;
