import * as React from "react";
import { css } from "@emotion/react";

export default function TodoTitle() {
  return <h1 css={titleWrapper}>To Do List</h1>;
}

const titleWrapper = css`
  color: #66dd9c;
  font-weight: bold;
`;
