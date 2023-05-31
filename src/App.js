import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#000000e3";
      document.body.style.color = "white";
    } else if(mode ==='dark') {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextEdit" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter the text to analyze" mode={mode} />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
