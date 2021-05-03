import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useRecoilState } from "recoil";
import {
  getNewId,
  memosState,
  newMemoFormIsOpened,
  newMemoState,
  postMemo,
} from "../../modules/memos";

type FormProps = {
  isModalOpened: boolean;
  onSubmit: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBody: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleClose: () => void;
};

function AddMemoForm({
  isModalOpened,
  onSubmit,
  onChangeTitle,
  onChangeBody,
  handleClose,
}: FormProps) {
  return (
    <Dialog open={isModalOpened} onClose={handleClose}>
      <DialogTitle>新しいメモ</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          label="タイトル"
          type="text"
          onChange={onChangeTitle}
          fullWidth
        />
        <TextareaAutosize
          rowsMax={4}
          onChange={onChangeBody}
          id="title"
          aria-label="本文"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit}>
          <AddIcon />
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function useAddMemoForm(): FormProps {
  const [isModalOpened, setIsModalOpened] = useRecoilState(newMemoFormIsOpened);
  const [newMemo, setNewMemo] = useRecoilState(newMemoState);
  const [memos, setMemos] = useRecoilState(memosState);

  const onSubmit = async () => {
    const memo = { ...newMemo, id: getNewId() };

    setNewMemo(memo);
    const memoData = await postMemo(memo);

    setMemos([...memos, memoData]);

    setIsModalOpened(false);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const memoChanged = { ...newMemo, title };

    setNewMemo(memoChanged);
  };

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.target.value;
    const memoChanged = { ...newMemo, body };

    setNewMemo(memoChanged);
  };

  const handleClose = () => {
    setIsModalOpened(false);
  };

  return {
    isModalOpened,
    onSubmit,
    onChangeTitle,
    onChangeBody,
    handleClose,
  };
}

export function FormContainer() {
  return <AddMemoForm {...useAddMemoForm()} />;
}
