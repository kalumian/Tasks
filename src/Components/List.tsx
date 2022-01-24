// Import Lib
import React from "react";

// Import Function
import { Firebase } from "../Functions/FunctionsFirebase";

// Import Components
import Task from "./Task";

// Import interface
import { TaskInterface } from "../Interfaces/interfaces";

const List: React.FC<{ section: string }> = ({ section }) => {
  const firebase = Firebase();

  return (
    <div className="list">
      <div className="row">
        <div></div>
        <div></div>
        <div>المستوى</div>
        <div>التاريخ</div>
        <div>المهمة</div>
      </div>
      {/* Tasks */}
      {/* Filter Tasks True / False */}
      {firebase.Tasks.filter((e) => {
        if (section === "finish") {
          return e.state === true;
        }else{
          return e.section === section && e.state !== true
        }
        
      }).map((item: TaskInterface) => {
        return <Task item={item} key={item.id} />;
      }, 1000)}
    </div>
  );
};

export default List;
