import { css } from "@emotion/react";
import TodoListItem from "./TodoListItem";
import { useRecoilValue } from "recoil";
import { ITodoTypes } from "../recoil/atom";
import { filteredTodoListState } from "../recoil/selector";

export default function TodoList() {
  const todoList = useRecoilValue<ITodoTypes[] | undefined>(filteredTodoListState);

  return (
    <div css={listWrapper}>
      {todoList &&
        todoList.length > 0 &&
        todoList.map((todo: ITodoTypes) => <TodoListItem key={todo.id} todo={todo} />)}
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
