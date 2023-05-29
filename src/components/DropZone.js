import { useState } from "react";
import { useDrop } from "react-dnd";
import { RiDeleteBinLine } from "react-icons/ri";

const DropZone = () => {
  const [formInputs, setFormInputs] = useState([]);

  const handleDrop = (item) => {
    console.log(" lll :: ", item);
    const { label } = item;
    const newInput = item;

    setFormInputs((prevInputs) => [...prevInputs, newInput]);
  };

  const handleDelete = (label) => {
    setFormInputs((prevInputs) =>
      prevInputs.filter((input) => input.label !== label)
    );
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ["input", "select"],
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  const dropZoneStyle = {
    border: isActive ? "2px dashed blue" : "2px dashed gray",
    padding: "16px",
    width: "1500px",
  };

  return (
    <div ref={drop} style={dropZoneStyle}>
      <h2>Form Builder</h2>
      {formInputs.map((input) => (
        <div className="input-group" key={input.id}>
          <label htmlFor={input.tagName} className="input-label">
            {input.label}
          </label>
          <input type={input.InputType} id={input.id} className="input-field" />
          <button
            className="delete-icon"
            onClick={() => handleDelete(input.label)}
          >
            <RiDeleteBinLine />
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropZone;
