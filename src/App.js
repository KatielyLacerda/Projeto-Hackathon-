// src/App.js
import React, { useState } from "react";
import TelaInicial from "./teleinicial";
import Chat from "./chat";
import "./App.css";
import logo from "./logo.png"; // Importando a logo

function App() {
  const [role, setRole] = useState(null);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <>
      <header className="app-header">
        <img src={logo} alt="Logo" className="app-logo" />
      </header>
      <div className="App">
        {!role ? (
          <TelaInicial onRoleSelect={handleRoleSelect} />
        ) : (
          <Chat role={role} />
        )}
      </div>
    </>
  );
}

export default App;
