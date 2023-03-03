import * as React from "react";
import { css } from "@emotion/react";
import modifyButton from "./../assets/images/modifyButton.png";
import deleteButton from "./../assets/images/deleteButton.png";

export interface IAppProps {
  todo: string;
}

export default function TodoListItem(props: IAppProps) {
  return (
    <div css={listItemWrapper}>
      <div css={leftSection}>
        <input type="checkbox" />
        <span>{props.todo}</span>
      </div>
      <div css={rightSection}>
        <img src={modifyButton} />
        <img src={deleteButton} />
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

  > input {
    margin-right: 15px;
    width: 35px;
    height: 35px;
    background: #ffffff;
    border: 2px solid #66dd9c;
    border-radius: 5px;
    cursor: pointer;
  }

  > span {
    font-size: 20px;
    color: #000000;
  }
`;

const rightSection = css`
  display: flex;
  align-items: center;

  > img:nth-of-type(1) {
    margin-right: 15px;
  }

  > img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;
