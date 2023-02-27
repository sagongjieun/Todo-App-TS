import * as React from "react";
import { css } from "@emotion/react";

export interface IAppProps {}

export default function TodoToggle(props: IAppProps) {
  return (
    <div css={toggleButtonWrapper}>
      <button>All</button>
      <button>Completed</button>
    </div>
  );
}

const toggleButtonWrapper = css`
  margin-bottom: 25px;
  width: 100%;

  > button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #ffffff;
    margin-right: 20px;
    font-size: 18px;
  }

  > button:nth-of-type(1) {
    color: #66dd9c;
    font-weight: bold;
  }

  > button:nth-of-type(2) {
    color: #989595;
  }
`;
