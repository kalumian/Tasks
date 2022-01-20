// Import From Lib
import * as React from "react";
// Import Components

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Content/>
      <Footer />
    </main>
  );
};

export default Home;
