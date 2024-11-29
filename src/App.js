

import React, { useState } from "react";

function App() {
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([]);
  // Estado para la nueva tarea
  const [taskInput, setTaskInput] = useState("");

  // Agregar tarea
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput(""); // Limpiar input
    }
  };

  // Eliminar tarea por índice
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Limpiar todas las tareas
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Lista de Tareas</h1>

      {/* Input y botón de agregar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Escribe una tarea"
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
        <button
          onClick={clearTasks}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          Limpiar Lista
        </button>
      </div>

      {/* Lista de tareas */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

