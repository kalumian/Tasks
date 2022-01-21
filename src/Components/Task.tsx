import React from "react";
import { TaskInterface } from "../interfaces";

interface Props {
  item: TaskInterface;
}
const Task = ({item}: Props) => {
  return (
    <div className="row">
      <div>-</div>
      <div>-</div>
      <div>{item.def}</div>
      <div>{item.date1}</div>
      <div className="select">{item.title}</div>
    </div>
  );
};

export default Task;
