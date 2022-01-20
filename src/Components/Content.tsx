// Import Lib
import React from "react";

// Import Components
import List from "./List";
import Form from "./Form";

const Content: React.FC = () => {
  return (
    <section className="content container">
      <header className="header-content">
        <Form />
        <List />
      </header>
      <aside className="aside"></aside>
    </section>
  );
};

export default Content;
