import React, { useState } from "react";
import DraggableInput from "./components/DraggableInput";
import DropZone from "./components/DropZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const generateRandomId = () => {
    const ID = `input-${Math.random().toString(36)}`
    return ID;
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="sidebar">
          <ul>
            <li>
              <DraggableInput
                tagName="input"
                InputType="text"
                label="Text Input"
                id={generateRandomId()}
              />
            </li>
            <li>
              <DraggableInput
                tagName="input"
                InputType="number"
                label="Number Input"
                id={generateRandomId()}
              />
            </li>
            <li>
              <DraggableInput
                tagName="input"
                InputType="email"
                label="Email Input"
                id={generateRandomId()}
              />
            </li>
            <li>
              <DraggableInput
                tagName="input"
                InputType="password"
                label="Password Input"
                id={generateRandomId()}
              />
            </li>
          </ul>
        </div>

        <div className="content">
          <DropZone />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
