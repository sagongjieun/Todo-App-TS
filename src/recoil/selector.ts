import { selector } from "recoil";
import { ITodoTypes, todoListFilterState, todoState } from "./atom";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter: string = get(todoListFilterState);
    const list: ITodoTypes[] = get(todoState);

    switch (filter) {
      case "All":
        return list;
      case "Completed":
        return list.filter((item) => item.isComplete);
    }
  },
});
