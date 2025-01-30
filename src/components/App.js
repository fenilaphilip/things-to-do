import React from "react";
import Banner from "./Banner";
import CreateTodo from "./CreateToDo";
import DisplayTodo from "./DisplayToDo";
import "../styles/style.css"


export default function App() {
  return (
    <div className="container" id="todoContainer">
      <Banner />
      <CreateTodo />
      <DisplayTodo />
    </div>
  );
}
