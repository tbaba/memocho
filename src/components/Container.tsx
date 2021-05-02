import React from "react";
import { ListContainer } from "./MemoList";
import { FormContainer as AddForm } from "./AddMemo/Form";
import { FormContainer as EditForm } from "./EditMemo/Form";
import { AppendButtonContainer } from "./AppendButton";
import { Grid } from "@material-ui/core";

export function Container() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={2} >
          <div className="list-memos">
            <ListContainer />
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="edit-memo">
            <EditForm />
          </div>
        </Grid>
        <AppendButtonContainer />
        <AddForm />
      </Grid>
    </div>
  );
}
