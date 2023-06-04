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
import { FaCalendar } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';



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
        <div className="sidebar">
          <div className="drag-group">
            <DraggableInput
              tagName="input"
              InputType="text"
              label="Text Input"
              id={generateRandomId()}
              icon={<FaKeyboard size={"30px"} />}
            />
            <DraggableInput
              tagName="input"
              InputType="number"
              label="Number Input"
              id={generateRandomId()}
              icon={<FaKeyboard size={"30px"} />}
            />
          </div>

          <div className="drag-group">
            <DraggableInput
              tagName="input"
              InputType="email"
              label="Email Input"
              id={generateRandomId()}
              icon={<FaKeyboard size={"30px"} />}
            />
            <DraggableInput
              tagName="input"
              InputType="password"
              label="Password Input"
              id={generateRandomId()}
              icon={<FaKeyboard size={"30px"} />}
            />
          </div>

          <div className="drag-group">
            <DraggableInput
              tagName="input"
              InputType="checkbox"
              label="checkbox Input"
              id={generateRandomId()}
              icon={<AiOutlineCheckSquare size={"30px"} />}
            />
            <DraggableInput
              tagName="button"
              InputType="radio"
              label="radio input"
              id={generateRandomId()}
              icon={<FaRegDotCircle size={"30px"} />}
            />
          </div>

          <div className="drag-group">
            <DraggableInput
              tagName="input"
              InputType="date"
              label="date Input"
              id={generateRandomId()}
              icon={<FaCalendar size={"30px"} />}
            />
            <DraggableInput
              tagName="select"
              InputType="select"
              label="select option"
              selectOption={["HTML", "CSS", "JAVASCRIPT"]}
              id={generateRandomId()}
              icon={<BsList size={"30px"} />}
            />
          </div>

          <div className="drag-group">
            <DraggableInput
              tagName="input"
              InputType="file"
              label="file upload Input"
              id={generateRandomId()}
              icon={<BsUpload size={"30px"} />}
            />
            <DraggableInput
              tagName="button"
              InputType="submit"
              label="submit"
              id={generateRandomId()}
              icon={<MdCheckCircle size={"30px"} />}
            />
          </div>
        </div>

        <div className="drop-zone">
          <DropZone />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
