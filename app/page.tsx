"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const messages = useQuery(api.getMessages.getMessages) || [];
  const addMessage = useMutation(api.addMessage.addMessage);
  const deleteMessage = useMutation(api.deleteMessage.deleteMessage);
  const [text, setText] = useState("");

  // Thêm message
  const handleAdd = async () => {
    if (!text.trim()) return;
    await addMessage({ text });
    setText("");
  };

  // Xóa message
  const handleDelete = async (id: string) => {
    await deleteMessage({ id });
  };

  // Sort messages mới nhất trước
  const sortedMessages = [...messages].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>My Cloud App</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter message"
          style={{ padding: "0.5rem", width: "300px" }}
        />
        <button
          onClick={handleAdd}
          style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
        >
          Add
        </button>
      </div>

      <ul style={{ marginTop: "2rem" }}>
        {sortedMessages.map((m: any) => (
          <li key={m._id} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
            <span style={{ flexGrow: 1 }}>
              <strong>{new Date(m.createdAt).toLocaleString()}</strong>: {m.text}
            </span>
            <button
              onClick={() => handleDelete(m._id)}
              style={{ marginLeft: "1rem", padding: "0.3rem 0.5rem", background: "red", color: "white", border: "none", cursor: "pointer" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
