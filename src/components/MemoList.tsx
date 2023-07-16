import React, { FC } from "react";
import { Memo } from "../types/memo";
import "./MemoList.css";

type Props = {
  memos: Memo[];
  editingMemo: Memo | undefined;
  setEditingMemo: (memo: Memo) => void;
  addMemo: () => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, editingMemo, setEditingMemo, addMemo } = props;

  const editingMemoClass = (memo: Memo): string | undefined => {
    if (editingMemo && memo.id === editingMemo.id) return "editing-memo";
  };

  return (
    <>
      <ul className="list-style">
        {memos.map((memo) => (
          <li
            key={memo.id}
            onClick={() => setEditingMemo(memo)}
            className={`list-element ${editingMemoClass(memo)}`}
          >
            {memo.text.split("\n")[0]}
          </li>
        ))}
        <li onClick={addMemo} style={{ cursor: "pointer" }}>
          +
        </li>
      </ul>
    </>
  );
};
