import React from "react";
import { useRecoilValue } from "recoil";
import { PersistedRow } from "../../models";
import { memosState } from "../../modules/memos";
import { MemoContainer } from './Memo';

type ListProps = {
  memos: PersistedRow[];
};

function List({ memos }: ListProps) {
  const items = memos.map((memo) => (
    <MemoContainer key={memo.id} memo={memo} />
  ));

  return <div>{items}</div>;
}

function useList() {
  const memos = useRecoilValue(memosState);

  return {
    memos,
  };
}

export function ListContainer() {
  return <List {...useList()} />;
}
