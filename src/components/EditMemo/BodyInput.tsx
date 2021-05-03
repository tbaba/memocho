import { TextField } from "@material-ui/core";
import React from "react";
import { useRecoilState, useRecoilValue, useRecoilCallback } from "recoil";
import { memosState, editMemoState, putMemo } from "../../modules/memos";

type BodyInputProps = {
  id: string;
  body: string;
  onChange: (newValue: string) => void;
  saveMemos: (id: string) => void;
};

function BodyInput({ id, body, onChange, saveMemos }: BodyInputProps) {
  return (
    <TextField
      fullWidth
      multiline
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        onChange(e.target.value)
      }
      onBlur={() => saveMemos(id)}
      value={body}
    />
  );
}

function useBodyInput(): BodyInputProps {
  const [memo, setMemo] = useRecoilState(editMemoState);
  const memos = useRecoilValue(memosState);
  const editedMemo = useRecoilValue(editMemoState);
  const saveMemos = useRecoilCallback(
    ({ set }) => async (id: string) => {
      const idx = memos.findIndex((item) => item.id === id);

      const updatedMemo = await putMemo(editedMemo);
      set(memosState, [
        ...memos.slice(0, idx),
        updatedMemo,
        ...memos.slice(idx + 1),
      ]);
    },
    [memo.title, memo.body]
  );

  const { id, body } = memo;

  const onChange = (newValue: string) => {
    const editedMemo = { ...memo, body: newValue };

    setMemo(editedMemo);
  };

  return {
    id,
    body,
    onChange,
    saveMemos,
  };
}

export function BodyInputContainer() {
  return <BodyInput {...useBodyInput()} />;
}
