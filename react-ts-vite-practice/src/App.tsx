import * as React from "react";
import { css } from "@emotion/react";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoToggle from "./components/TodoToggle";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <RecoilRoot>
      <div css={mainWrapper}>
        <TodoTitle />
        <TodoInput />
        <TodoToggle />
        <div css={divideLine}></div>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

const mainWrapper = css`
  width: 807px;
  height: 670px;
  position: absolute;
  left: calc(50% - 807px / 2);
  top: calc(50% - 670px / 2);
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const divideLine = css`
  width: 760px;
  border: 1px solid #989595;
  margin-bottom: 30px;
`;
