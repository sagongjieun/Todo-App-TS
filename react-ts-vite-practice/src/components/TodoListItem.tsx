import { useState } from "react";
import { css } from "@emotion/react";
import modifyButton from "./../assets/images/modifyButton.png";
import deleteButton from "./../assets/images/deleteButton.png";
import { ITodoTypes, todoState } from "../recoil/atom";
import { useRecoilState } from "recoil";

export interface ITodoListItemProps {
  key: number;
  todo: ITodoTypes;
}

export default function TodoListItem(props: ITodoListItemProps) {
  const [todo, setTodo] = useRecoilState<ITodoTypes[]>(todoState);
  const [modifyMode, setModifyMode] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(props.todo.contents);
  const index = todo.findIndex((listItem) => listItem === props.todo);

  const onClickModifyTodo = (): void => {
    setModifyMode(!modifyMode);
  };

  const onClickDeleteTodo = (): void => {
    const newList = [...todo.slice(0, index), ...todo.slice(index + 1)];
    setTodo(newList);
  };

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewContent(e.target.value);
  };

  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>, id: number): void => {
    if (e.key === "Enter") {
      const modifiedTodo = {
        ...props.todo,
        contents: newContent,
      };

      const newList = [...todo.slice(0, index), modifiedTodo, ...todo.slice(index + 1)];
      setTodo(newList);

      setModifyMode(!modifyMode);
    }
  };

  return (
    <div css={listItemWrapper}>
      <div css={leftSection}>
        <input type="checkbox" />
        {modifyMode ? (
          <input
            placeholder={props.todo.contents}
            onChange={(e) => onChangeTodo(e)}
            onKeyDown={(e) => onKeyDownEnter(e, props.todo.id)}
          />
        ) : (
          <span>{props.todo.contents}</span>
        )}
      </div>
      <div css={rightSection}>
        <img src={modifyButton} onClick={onClickModifyTodo} />
        <img src={deleteButton} onClick={onClickDeleteTodo} />
      </div>
    </div>
  );
}

const listItemWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const leftSection = css`
  display: flex;
  align-items: center;

  > input:nth-of-type(1) {
    margin-right: 15px;
    width: 35px;
    height: 35px;
    background: #ffffff;
    border: 2px solid #66dd9c;
    border-radius: 5px;
    cursor: pointer;
  }

  > input:nth-of-type(2) {
    font-size: 18px;
    color: #000000;
    border: none;
    border-bottom: 1px solid #989595;
    outline: none;
    width: 550px;
    padding: 6px 0;
  }

  > span {
    font-size: 18px;
    color: #000000;
  }
`;

const rightSection = css`
  display: flex;
  align-items: center;

  > img {
    margin-right: 15px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;
