// Import Lib
import React from "react";

// Import Components
import List from "./List";
import Form from "./Form";

const Content: React.FC = () => {
  return (
    <>
      <div>
        <h2 className="title">قسم مهام الدراسة</h2>
      </div>
      <section className="content container">
        <header className="header-content">
          <Form />
          <List />
        </header>
        <aside className="aside">
          <header className="aside-header">اقسام</header>
          <button>الدراسة</button>
          <button>اعمال منزلية</button>
          <button>طلبات</button>
        </aside>
      </section>
    </>
  );
};

export default Content;
