import React, { FC, useState } from "react";
import type { Memo } from "./types/memo";
import { useMemoData } from "./hooks/useMemoData";
import { MemoEditForm } from "./components/MemoEditForm";
import { MemoList } from "./components/MemoList";
import "./App.css";

const App: FC = () => {
  const { memos, addMemoData, updateMemoData, deleteMemoData } = useMemoData();
  const [editingMemo, setEditingMemo] = useState<Memo | undefined>();

  return (
    <>
      <h1>メモアプリ</h1>
      <main>
        <div className="list">
          <MemoList
            memos={memos}
            editingMemo={editingMemo}
            setEditingMemo={setEditingMemo}
            addMemoData={addMemoData}
          />
        </div>
        <div className="form">
          {editingMemo && (
            <MemoEditForm
              memo={editingMemo}
              setEditingMemo={setEditingMemo}
              updateMemoData={updateMemoData}
              deleteMemoData={deleteMemoData}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
