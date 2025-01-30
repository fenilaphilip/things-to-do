import React from "react";
import CreateTodo from "./CreateToDo";
import DisplayTodo from "./DisplayToDo";
import "../styles/style.css"


export default function App() {
  return (
    <div className="container">
      <CreateTodo />
      <DisplayTodo />
    </div>
  );
}
