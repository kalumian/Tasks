// Import From Lib
import * as React from "react";
// Import Components
import List from "./List";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="content">
        <Form />
        <List />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
