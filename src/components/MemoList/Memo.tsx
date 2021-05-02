import React from 'react';
import { useSetRecoilState } from 'recoil';
import { PersistedRow } from '../../models';
import { editMemoState } from '../../modules/memos';

type MemoContainerProps = {
  memo: PersistedRow;
  onClick: () => void;
};

function Memo({ memo: { title, body }, onClick }: MemoContainerProps) {
  return (
    <div onClick={onClick}>
      <header>
        <h2 style={{ fontSize: "1em" } as const}>{title}</h2>
      </header>
      <section>{body.substr(0, 30)}</section>
    </div>
  );
}

function useMemoContainer(memo: PersistedRow): MemoContainerProps {
  const setEditMemo = useSetRecoilState(editMemoState);

  const onClick = () => {
    setEditMemo(memo);
  };

  return {
    memo,
    onClick,
  };
}

export function MemoContainer({ memo }: { memo: PersistedRow }) {
  return <Memo {...useMemoContainer(memo)} />;
}
