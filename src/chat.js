import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa"; // Importando o ícone de clipe

export default function Chat() {
  const { role } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: role, text: input }]);
      setInput("");
    }
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Aqui você pode lidar com o upload dos arquivos
    console.log("Arquivos enviados:", files);
  };

  return (
    <div className="chat-container">
      <h2>
        Chat para{" "}
        {role === "planejador" ? "Planejador" : "Técnico de Manutenção"}
      </h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          id="file-upload"
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        <label htmlFor="file-upload">
          <button className="attach-button">
            <FaPaperclip />
          </button>
        </label>
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
