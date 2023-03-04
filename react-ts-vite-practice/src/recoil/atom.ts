import { atom } from "recoil";

export interface ITodoTypes {
  id: number;
  contents: string;
  isComplete: boolean;
}

export const todoState = atom<ITodoTypes[]>({
  key: "todoState",
  default: [
    {
      id: 0,
      contents: "",
      isComplete: false,
    },
  ],
});
