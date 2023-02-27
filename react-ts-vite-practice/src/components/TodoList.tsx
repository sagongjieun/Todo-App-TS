import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import TodoListItem from "./TodoListItem";

export interface IAppProps {}

export default function TodoList(props: IAppProps) {
  const [todoList, setTodoList] = useState<string[]>([]);

  return <div css={listWrapper}></div>;
}

const listWrapper = css`
  width: 706px;
  height: 320px;
`;
