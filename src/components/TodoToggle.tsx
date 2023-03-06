import { useEffect } from "react";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil/atom";

export default function TodoToggle() {
  const [todoListFilter, setTodoListFilter] = useRecoilState<string>(todoListFilterState);

  const onClickToggleFilter = (filter: string): void => {
    setTodoListFilter(filter);
  };

  return (
    <div css={toggleButtonWrapper}>
      {todoListFilter === "All" ? (
        <>
          <button css={chosenFilter} onClick={() => onClickToggleFilter("All")}>
            All
          </button>
          <button onClick={() => onClickToggleFilter("Completed")}>Completed</button>
        </>
      ) : (
        <>
          <button onClick={() => onClickToggleFilter("All")}>All</button>
          <button css={chosenFilter} onClick={() => onClickToggleFilter("Completed")}>
            Completed
          </button>
        </>
      )}
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
`;

const chosenFilter = css`
  color: #66dd9c;
  font-weight: bold;
`;
