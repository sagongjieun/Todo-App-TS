import * as React from "react";
import { css } from "@emotion/react";

export interface IAppProps {}

export default function TodoTitle(props: IAppProps) {
  return <h1 css={titleWrapper}>To Do List</h1>;
}

const titleWrapper = css`
  color: #66dd9c;
`;
