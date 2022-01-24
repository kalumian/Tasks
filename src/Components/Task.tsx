// Import Lib
import React from "react";

// Impoer Interface
import { TaskInterface } from "../Interfaces/interfaces";

// Import Function
import { DeleteDoc, UpdateState } from "../Functions/FunctionsFirebase";

interface Props {
  item: TaskInterface;
}
const Task = ({ item }: Props) => {
  const HandledeletDoc = (): void => {
    DeleteDoc(item.id);
  };
  const HandleUpdateState = (): void => {
    UpdateState(item.id);
  };
  return (
    <div className="row">
      <div className="button-trash" onClick={HandledeletDoc}>
        <i className="fas fa-trash-alt"></i>
      </div>
      <div className="button-correct" onClick={HandleUpdateState}>
        <i className="fas fa-check"></i>
      </div>
      <div>{item.def}</div>
      <div>{item.date2}</div>
      <div className="select">{item.title}</div>
    </div>
  );
};

export default Task;
