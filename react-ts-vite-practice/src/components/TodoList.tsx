import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import TodoListItem from "./TodoListItem";

export interface IAppProps {}

interface todoListProps {
  id: number;
  todo: string;
}

export default function TodoList(props: IAppProps) {
  const [todoList, setTodoList] = useState<todoListProps[]>([
    { id: 1, todo: "task1" },
    { id: 2, todo: "task2" },
  ]);

  return (
    <div css={listWrapper}>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo.todo} />
      ))}
    </div>
  );
}

const listWrapper = css`
  width: 706px;
  height: 320px;
`;
