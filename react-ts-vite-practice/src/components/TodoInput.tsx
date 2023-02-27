import * as React from "react";
import { css } from "@emotion/react";

export interface IAppProps {}

export default function TodoInput(props: IAppProps) {
  return <input css={inputWrapper} placeholder="Add a task ..." />;
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
