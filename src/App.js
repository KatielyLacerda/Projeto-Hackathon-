// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaInicial from "./teleinicial";
import Chat from "./chat";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <Router>
      <header className="app-header">
        <img src={logo} alt="Logo" className="app-logo" />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/chat/:role" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
