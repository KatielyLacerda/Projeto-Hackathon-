// src/TelaInicial.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TelaInicial() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/chat/${role}`);
  };

  return (
    <div className="tela-inicial">
      <h1>Bem-vindo ao Chatbot Inteligente da Tractian!</h1>
      <div className="botao-container">
        <button onClick={() => handleRoleSelect("planejador")}>
          Sou Planejador
        </button>
        <button onClick={() => handleRoleSelect("manutencao")}>
          Sou Técnico de Manutenção
        </button>
      </div>
    </div>
  );
}
