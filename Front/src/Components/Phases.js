import React from "react";
import "../styles/phases.css";

export default function Phases() {
  return (
    <div className="taskPhases">
      <div className="phase">
        <h1>To-Do</h1>
        <div className="task">
          <span>Test1</span>
          <button className="edit">✏️</button>
          <button className="delete">❌</button>
        </div>
      </div>
      <div className="task">
        <h1>Doing</h1>
        <div className="phase">
          <span>Test2</span>
          <button className="edit">✏️</button>
          <button className="delete">❌</button>
        </div>
      </div>
      <div className="phase">
        <h1>Done</h1>
        <div className="task">
          <span>Test3</span>
          <button className="edit">✏️</button>
          <button className="delete">❌</button>
        </div>
      </div>
    </div>
  );
}
