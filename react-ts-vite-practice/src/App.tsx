import * as React from "react";
import { css } from "@emotion/react";
import TodoTitle from "./components/TodoTitle";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div css={mainWrapper}>
      <TodoTitle />
    </div>
  );
}

const mainWrapper = css`
  width: 807px;
  height: 670px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;
