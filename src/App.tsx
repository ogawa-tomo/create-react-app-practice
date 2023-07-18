import React, { FC, useState } from "react";
import type { Memo } from "./types/memo";
import { useMemoData } from "./hooks/useMemoData";
import { MemoEditForm } from "./components/MemoEditForm";
import { MemoList } from "./components/MemoList";
import "./App.css";

const App: FC = () => {
  const { memos, addMemoData, updateMemoData, deleteMemoData } = useMemoData();
  const [editingMemo, setEditingMemo] = useState<Memo | undefined>();

  const addMemo = () => {
    const addedMemo = addMemoData("新規メモ");
    setEditingMemo(addedMemo);
  };

  const selectMemo = (memo: Memo) => {
    setEditingMemo(memo);
  };

  const updateMemo = (memo: Memo, newText: string) => {
    updateMemoData(memo, newText);
    setEditingMemo(undefined);
  };

  const deleteMemo = (memo: Memo) => {
    deleteMemoData(memo);
    setEditingMemo(undefined);
  };

  return (
    <>
      <h1>メモアプリ</h1>
      <main>
        <div className="list">
          <MemoList
            memos={memos}
            editingMemo={editingMemo}
            selectMemo={selectMemo}
            addMemo={addMemo}
          />
        </div>
        <div className="form">
          {editingMemo && (
            <MemoEditForm
              memo={editingMemo}
              updateMemo={updateMemo}
              deleteMemo={deleteMemo}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
