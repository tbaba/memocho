import React from "react";
import { RecoilRoot, MutableSnapshot } from "recoil";
import { Container } from "./components";
import { editMemoState, getNewId, memosState } from "./modules/memos";

function App() {
  return (
    <RecoilRoot initializeState={initialize}>
      <Container />
    </RecoilRoot>
  );
}

const initialize = ({ set }: MutableSnapshot) => {
  const initialMemo = {
    id: getNewId(),
    title: "最初のやつ",
    body: "最初のやつ。\n最初のやつやで。",
  };

  set(memosState, [initialMemo]);
  set(editMemoState, initialMemo);
};

export default App;
