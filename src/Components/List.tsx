// Import Lib
import React, { useState } from "react";
import { Style } from "util";

// Import Data
import Data from "../data.json";

// Import Components
import Task from "./Task";

// Import interface
import { TaskInterface } from "../interfaces";

const List: React.FC = () => {
  const [Tasks, setTask] = useState<TaskInterface[]>([]);
  return (
    <div className="list">
      <div className="row">
        <div>تم</div>
        <div>حذف</div>
        <div>المستوى</div>
        <div>التاريخ</div>
        <div>المهمة</div>
      </div>
      {/* Tasks */}

      {Tasks.map((item: TaskInterface, key: number) => {
        return <Task item={item} key={key} />;
      })}
    </div>
  );
};

export default List;
