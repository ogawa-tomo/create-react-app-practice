import React, { useState, useEffect, FC, ChangeEvent, useContext } from "react";
import { LogginFlagContext } from "./providers/LogginFlagProvider";
import { Memo } from "../types/memo";
import "./MemoEditForm.css";

type Props = {
  memo: Memo;
  updateMemo: (memo: Memo, newText: string) => void;
  deleteMemo: (memo: Memo) => void;
};

export const MemoEditForm: FC<Props> = (props) => {
  const { memo, updateMemo, deleteMemo } = props;
  const [newText, setNewText] = useState<string>(memo.text);
  const { isLoggedIn } = useContext(LogginFlagContext);

  useEffect(() => {
    setNewText(memo.text);
  }, [memo]);

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewText(e.target.value);
  };

  return (
    <>
      <textarea
        value={newText}
        onChange={onChangeText}
        className="text-area"
        readOnly={!isLoggedIn}
      ></textarea>
      {isLoggedIn && (
        <div>
          <button onClick={() => updateMemo(memo, newText)} className="update">
            更新
          </button>
          <button onClick={() => deleteMemo(memo)} className="delete">
            削除
          </button>
        </div>
      )}
    </>
  );
};
