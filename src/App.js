import React, { useState } from "react";
import DraggableInput from "./components/DraggableInput";
import DropZone from "./components/DropZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaKeyboard } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsList } from "react-icons/bs";

import { FormObjects } from "./components/FormObjects";

function App() {
  const generateRandomId = () => {
    const randomId = `input_${Math.random()
      .toString(36)
      .substring(2)}_${Date.now()}`;
    return randomId;
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="form-builder">
        <div className="drop-zone">
          <DropZone />
        </div>

        <div className="sidebar">
          <div className="drag-group">
            {FormObjects?.map((obj) => {
              return (
                <DraggableInput
                  schema={obj.data}
                  label={obj?.title}
                  id={obj.id}
                  icon={obj?.icon}
                  key={obj.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
