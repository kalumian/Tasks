// Import Lib
import React, { FC, ChangeEvent, useState } from "react";

// Import Functions
import { AddDoc } from "../Functions/FunctionsFirebase";

const Form: FC<{ section: string }> = ({ section }) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [def, setDef] = useState<number>(0);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (def !== 0 && title !== "" && date !== "") {
          AddDoc(title, date, def , section);
          setTitle("");
          setDate("");
          setDef(0);
        } else {
          alert("تأكد من تعبئة جميع الحقول قبل ارفاق المهمة");
        }
      }}
    >
      {section !== "finish" ? (
        <>
          {section !== "auther" ? (
            <>
              <input
                type="text"
                name="write-task"
                className="form-element"
                autoComplete="off"
                placeholder="اضافة مهمة جديدة"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(event.target.value);
                }}
                value={title}
              />
              <input
                type="date"
                name="write-date"
                className="form-element"
                autoComplete="off"
                value={String(date)}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDate(event.target.value);
                }}
              />
              <select
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setDef(Number(event.target.value));
                }}
                name="select-level"
                className="form-element"
                value={def}
              >
                <option value={0}>مستوى</option>
                <option value={1}>عاجل</option>
                <option value={2}>عاجل جداً</option>
                <option value={3}>مهم</option>
                <option value={4}>غير مهم</option>
              </select>
              <input
                type="submit"
                name="add-task"
                className="form-element"
                value={"حفظ"}
              />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </form>
  );
};

export default Form;
