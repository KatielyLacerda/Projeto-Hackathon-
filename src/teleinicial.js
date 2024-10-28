// src/TelaInicial.js
import React from "react";

export default function TelaInicial({ onRoleSelect }) {
  return (
    <div className="tela-inicial">
      <h1>Bem-vindo ao Chatbot Inteligente da Tractian!</h1>
      <div className="botao-container">
        <button onClick={() => onRoleSelect("chefe")}>Sou Planejador</button>
        <button onClick={() => onRoleSelect("engenheiro")}>
          Sou Técnico de Manuntenção
        </button>
      </div>
    </div>
  );
}
