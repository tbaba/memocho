import shajs from "sha.js";
import {
  atom,
  useRecoilValue,
  useRecoilState,
  useRecoilCallback,
} from "recoil";
import { MemoInterface, PersistedRow, UnpersistedRow } from "../models";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import { createMemo, updateMemo } from "../graphql/mutations";
import { CreateMemoMutation, UpdateMemoMutation } from "../API";

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
  const sha = shajs("sha256").update(time.toString()).digest("hex");

  return sha;
};

export const postMemo = async (
  memo: UnpersistedRow
): Promise<MemoInterface> => {
  const response = (await API.graphql(
    graphqlOperation(createMemo, {
      input: { ...memo },
    })
  )) as GraphQLResult<CreateMemoMutation>;

  const memoData = response.data?.createMemo as MemoInterface;
  return memoData;
};

export const putMemo = async (memo: PersistedRow): Promise<MemoInterface> => {
  const response = (await API.graphql(
    graphqlOperation(updateMemo, {
      input: { ...memo },
    })
  )) as GraphQLResult<UpdateMemoMutation>;

  const memoData = response.data?.updateMemo as MemoInterface;
  return memoData;
};
