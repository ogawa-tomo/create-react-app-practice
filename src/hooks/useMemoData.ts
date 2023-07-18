import { useState, useEffect } from "react";
import type { Memo } from "../types/memo";

export const useMemoData = () => {
  const loadMemoData = (): Memo[] => {
    const data = localStorage.getItem("memos");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [memos, setMemos] = useState<Memo[]>(loadMemoData());

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const addMemoData = (text: string) => {
    const newId =
      memos.length === 0
        ? 1
        : Math.max(...memos.map((memo: Memo) => memo.id)) + 1;
    const newMemo = { id: newId, text: text };
    setMemos([...memos, newMemo]);
    return newMemo;
  };

  const updateMemoData = (memo: Memo, newText: string) => {
    const newMemos = [...memos];
    newMemos[memos.indexOf(memo)] = { id: memo.id, text: newText };
    setMemos(newMemos);
  };

  const deleteMemoData = (memo: Memo) => {
    const newMemos = [...memos];
    newMemos.splice(memos.indexOf(memo), 1);
    setMemos(newMemos);
  };

  return { memos, addMemoData, updateMemoData, deleteMemoData };
};
