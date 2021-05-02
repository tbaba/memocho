import React from 'react';
import { AppBar } from '@material-ui/core';
import { ListContainer } from './MemoList';
import { FormContainer } from './AddMemo/Form';
import { AppendButtonContainer } from './AppendButton';

export function Container() {
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
