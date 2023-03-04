import { useState } from "react";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { ITodoTypes, todoState } from "../recoil/atom";

export interface IAppProps {}

export default function TodoInput(props: IAppProps) {
  const [content, setContent] = useState<string>("");
  const [todo, setTodo] = useRecoilState<ITodoTypes[]>(todoState);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContent(e.target.value);
  };

  const onKeyDownSendTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const nextId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 0;

      setTodo([
        ...todo,
        {
          id: nextId,
          contents: content,
          isComplete: false,
        },
      ]);

      setContent("");
    }
  };

  return (
    <input
      css={inputWrapper}
      placeholder="Add a task ..."
      value={content}
      onChange={(e) => onChangeTodo(e)}
      onKeyDown={(e) => onKeyDownSendTodo(e)}
    />
  );
}

const inputWrapper = css`
  width: 706px;
  height: 58px;
  background: #ffffff;
  border: 1.5px solid #66dd9c;
  border-radius: 5px;
  outline: none;
  padding: 0 15px;
  margin: 50px 0 25px 0;
  font-size: 20px;

  ::placeholder {
    color: #989595;
  }
`;
