import shajs from 'sha.js';
import { atom } from "recoil";
import { PersistedRow, UnpersistedRow } from "../models";

export const memosState = atom<PersistedRow[]>({
  key: "memosState",
  default: [],
});

export const newMemoState = atom<UnpersistedRow>({
  key: "newMemo/State",
  default: { id: null, title: "", body: "" },
});

export const newMemoFormIsOpened = atom<boolean>({
  key: "newMemo/FormIsOpened",
  default: false,
});

export const editMemoState = atom<PersistedRow>({
  key: "editMemo/State",
  default: { id: "", title: "", body: "" },
});

export const getNewId = () => {
  const time = new Date();
  const sha = shajs('sha256').update(time.toString()).digest('hex');

  return sha;
}
