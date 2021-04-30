import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { newMemoFormIsOpened } from '../modules/memos';
import { useSetRecoilState } from 'recoil';

type AppendButtonProps = {
  openModal: () => void;
}

function useAppendButton() {
  const setIsModalOpened = useSetRecoilState(newMemoFormIsOpened);

  const openModal = () => {
    setIsModalOpened(true);
  }

  return {
    openModal,
  }
}

function AppendButton({ openModal }: AppendButtonProps) {
  return (
    <Fab color="primary" aria-label="add" style={{ position: 'absolute', bottom: '10px', right: '10px' } as const}>
      <AddIcon onClick={openModal} />
    </Fab>
  );
}

export function AppendButtonContainer() {
  return <AppendButton {...useAppendButton()} />;
}
