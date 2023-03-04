import * as React from "react";
import { css } from "@emotion/react";
import TodoListItem from "./TodoListItem";
import { useRecoilValue } from "recoil";
import { ITodoTypes, todoState } from "../recoil/atom";

export default function TodoList() {
  const todoList = useRecoilValue<ITodoTypes[]>(todoState);

  return (
    <div css={listWrapper}>
      {todoList.length > 1 && (
        <>{todoList.map((todo) => todo.id !== 0 && <TodoListItem key={todo.id} todo={todo} />)}</>
      )}
    </div>
  );
}

const listWrapper = css`
  width: 706px;
  height: 320px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
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
