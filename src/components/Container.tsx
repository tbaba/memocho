import React from 'react';
import { AppBar, Fab } from '@material-ui/core';
import { ListContainer } from './MemoList';
import AddIcon from '@material-ui/icons/Add';
import { newMemoFormIsOpened } from '../modules/memos';
import { useSetRecoilState } from 'recoil';
import { FormContainer } from './AddMemo/Form';
import { AppendButtonContainer } from './AppendButton';

function useContainer() {
  const setIsModalOpened = useSetRecoilState(newMemoFormIsOpened);

  const openModal = () => {
    setIsModalOpened(true);
  }

  return {
    openModal,
  }
}

export function Container() {
  const { openModal } = useContainer();

  return (
    <div className="App">
      <AppBar>
        <div style={{ margin: "0 10px" } as const}>
          <h1 style={{ fontSize: "1em" } as const}>Memocho</h1>
        </div>
      </AppBar>
      <ListContainer />
      <AppendButtonContainer />
      <FormContainer />
    </div>
  );
}
