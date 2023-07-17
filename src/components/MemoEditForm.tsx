import React, { useState, useEffect, FC, ChangeEvent } from "react";
import { Memo } from "../types/memo";
import "./MemoEditForm.css";

type Props = {
  memo: Memo;
  setEditingMemo: (memo: Memo | undefined) => void;
  updateMemoData: (memo: Memo, newText: string) => void;
  deleteMemoData: (memo: Memo) => void;
};

export const MemoEditForm: FC<Props> = (props) => {
  const { memo, setEditingMemo, updateMemoData, deleteMemoData } = props;
  const [newText, setNewText] = useState<string>(memo.text);

  useEffect(() => {
    setNewText(memo.text);
  }, [memo]);

  const onClickUpdate = () => {
    updateMemoData(memo, newText);
    setEditingMemo(undefined);
  };

  const onClickDelete = () => {
    deleteMemoData(memo);
    setEditingMemo(undefined);
  };

  return (
    <>
      <textarea
        value={newText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setNewText(e.target.value)
        }
        className="text-area"
      ></textarea>
      <button onClick={onClickUpdate} className="update">
        更新
      </button>
      <button onClick={onClickDelete} className="delete">
        削除
      </button>
    </>
  );
};
