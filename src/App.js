import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example1 from "./pages/example1";
import Example2 from "./pages/example2";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route key="example1" path="/example1" element={<Example1 />}></Route>
          <Route key="example2" path="/example2" element={<Example2 />}></Route>
          <Route path="*" element={<Example1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
