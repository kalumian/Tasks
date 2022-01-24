// Import Lib
import React from "react";

// Import Components
import List from "./List";
import Form from "./Form";

// Import Function
import {
  AddSection,
  Firebase,
  DeleteSection,
} from "../Functions/FunctionsFirebase";

//  Interfaces
interface Props {
  ChangeSection: any;
  section: string;
}

const Content: React.FC<Props> = ({ ChangeSection, section }) => {
  const firebase = Firebase();
  return (
    <>
      <div>
        <h2 className="title">
          {section === "finish"
            ? " "
            : "auther" !== section
            ? "قسم مهام " + section
            : "لم يتم تحديد اي قسم"}
        </h2>
      </div>
      <section className="content container">
        <header className="header-content">
          <Form section={section} />
          <List section={section} />
        </header>
        <aside className="aside">
          <header className="aside-header" onClick={AddSection}>
            اضافة قسم
          </header>
          {firebase.Section.map((item) => {
            return (
              <button onClick={() => ChangeSection(item.title)} key={item.id}>
                <i
                  className="fas fa-backspace"
                  onClick={() => DeleteSection(String(item.id))}
                ></i>
                {item.title}
              </button>
            );
          })}
          <button
            className={section === "finish" ? `finish-task` : `aouther-task`}
            onClick={() =>
              ChangeSection(section === "finish" ? `auther` : `finish`)
            }
          >
            {section === "finish"
              ? `المهامات المنتهية`
              : `المهامات الغير منتهية`}
          </button>
        </aside>
      </section>
    </>
  );
};

export default Content;
