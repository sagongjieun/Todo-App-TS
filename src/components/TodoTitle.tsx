import * as React from "react";
import { css } from "@emotion/react";

export interface ITodoTitleProps {
  titleColor: string;
}

export default function TodoTitle(props: ITodoTitleProps) {
  return <h1 css={titleWrapper(props.titleColor)}>To Do List</h1>;
}

const titleWrapper = (props: string) => css`
  color: ${props};
  font-weight: bold;
`;
