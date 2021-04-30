import React from 'react';
import { useRecoilValue } from 'recoil';
import { Memo as MemoProps } from '../../models';
import { memosState } from '../../modules/memos';

type ListProps = {
  memos: MemoProps[];
}

function List({ memos }: ListProps) {
  const items = memos.map((item) => <Memo {...item} />)

  return <div>{items}</div>;
}

function useList() {
  const memos = useRecoilValue(memosState);

  return {
    memos,
  }
}

export function ListContainer() {
  return <List {...useList()} />
}

function Memo({ title, body }: MemoProps) {
  return (
    <div>
      <header>
        <h2 style={{ fontSize: '1em' } as const}>{title}</h2>
      </header>
      <section>
        {body.substr(0, 30)}
      </section>
    </div>
  )
}
