// src/Chat.js
import React, { useState } from "react";

export default function Chat({ role }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: role, text: input }]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat para {role === "chefe" ? "Chefe" : "Engenheiro"}</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
