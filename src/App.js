import React from "react";
import "./mystyles.css";

export default function App() {
  return (
    <div className="App">
      <div className="card border-success m-4">
        <div className="card-header">
          <h1>Things to do...........</h1>
        </div>
        <div className="card-body">
          <p>Enjoy your Day !</p>
          <ul id="to-do-list"></ul>
          <form id="input-form">
            <input type="text" placeholder="Type something" id="to-do-input" />
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
}
