import React, { useEffect } from "react";
import { useState, FC } from "react";
import type { Memo } from "./types/memo";
import { MemoEditForm } from "./components/MemoEditForm";
import { MemoList } from "./components/MemoList";
import "./App.css";

const App: FC = () => {
  const loadMemo = (): Memo[] => {
    const data = localStorage.getItem("memos");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [memos, setMemos] = useState<Memo[]>(loadMemo());
  const [editingMemo, setEditingMemo] = useState<Memo | undefined>();

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const addMemo = () => {
    const newId =
      memos.length === 0
        ? 1
        : Math.max(...memos.map((memo: Memo) => memo.id)) + 1;
    const newMemo = { id: newId, text: "新規メモ" };
    setMemos([...memos, newMemo]);
    setEditingMemo(newMemo);
  };

  const updateMemo = (memo: Memo, newText: string) => {
    const newMemos = [...memos];
    newMemos[memos.indexOf(memo)] = { id: memo.id, text: newText };
    setMemos(newMemos);
    setEditingMemo(undefined);
  };

  const deleteMemo = (memo: Memo) => {
    const newMemos = [...memos];
    newMemos.splice(memos.indexOf(memo), 1);
    setMemos(newMemos);
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
            setEditingMemo={setEditingMemo}
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
