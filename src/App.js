import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotels from "./pages/hotel/Hotel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/list" element={<List />} />
        <Route exact path="/hotels" element={<Hotels />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
