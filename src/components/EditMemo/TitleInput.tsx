import { Input } from "@material-ui/core";
import React from "react";
import { useRecoilState, useRecoilValue, useRecoilCallback } from "recoil";
import { memosState, editMemoState } from "../../modules/memos";

type TitleInputProps = {
  id: string;
  title: string;
  onChange: (newValue: string) => void;
  saveMemos: (id: string) => void;
};

function TitleInput({ id, title, onChange, saveMemos }: TitleInputProps) {
  return (
    <Input
      fullWidth
      type="text"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      onBlur={() => saveMemos(id)}
      value={title}
    />
  );
}

function useTitleInput(): TitleInputProps {
  const [memo, setMemo] = useRecoilState(editMemoState);
  const memos = useRecoilValue(memosState);
  const editedMemo = useRecoilValue(editMemoState);
  const saveMemos = useRecoilCallback(
    ({ set }) => (id: string) => {
      const idx = memos.findIndex((item) => item.id === id);

      set(memosState, [
        ...memos.slice(0, idx),
        editedMemo,
        ...memos.slice(idx + 1),
      ]);
    },
    [memo.title, memo.body]
  );

  const { id, title } = memo;

  const onChange = (newValue: string) => {
    const editedMemo = { ...memo, title: newValue };

    setMemo(editedMemo);
  };

  return {
    id,
    title,
    onChange,
    saveMemos,
  };
}

export function TitleInputContainer() {
  return <TitleInput {...useTitleInput()} />;
}
