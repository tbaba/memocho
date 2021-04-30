import { atom } from "recoil";
import { Memo } from "../models";

export const memosState = atom<Memo[]>({
  key: "memosState",
  default: [],
});

export const newMemoState = atom<Memo>({
  key: "newMemo/State",
  default: { title: "", body: "" },
});

export const newMemoFormIsOpened = atom<boolean>({
  key: "newMemo/FormIsOpened",
  default: false,
});
