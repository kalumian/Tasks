// Import Data
import Links from "./links.json";

// Import From Lib
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Home from "./Components/Home";
import ToHome from "./Components/ToHome";

// Import Style
import "./Style/all.scss";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.links.Home} element={<Home />} />
        {/* Component path "/" To path "/home" Direct  */}
        <Route path={"/"} element={<ToHome link={Links.links.Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
