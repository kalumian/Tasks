// Import From Lib
import React, { useState } from "react";
// Import Components

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Home: React.FC = () => {
  const [section, setSection] = useState<string>("");
  // Function Change Section
  const ChangeSection = (title: string): void => {
    setSection(title);
  };
  return (
    <main>
      <Header />
      <Content ChangeSection={ChangeSection} section={section} />
      <Footer />
    </main>
  );
};

export default Home;
