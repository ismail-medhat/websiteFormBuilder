import { useState } from "react";
import { useDrop } from "react-dnd";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

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

  const handleCopy = (index) => {
    const objectInput = formInputs[index];
    const randomId = `input_${Math.random()
      .toString(36)
      .substring(2)}_${Date.now()}`;
    const newObjectInput = { ...objectInput, id: randomId };
    const newArray = [...formInputs];
    newArray.splice(index, 0, newObjectInput);
    setFormInputs(newArray);
  };

  const handleEdit = (index) => {
    const newArray = [...formInputs];
    const objectInput = formInputs[index];
  };

  const handleArrangment = (index, mode) => {
    const index1 = index;
    const index2 = mode == "up" ? index - 1 : index + 1;
    const firstObject = formInputs[index1];
    const secondObject = formInputs[index2];
    const newArray = [...formInputs];
    newArray[index1] = secondObject;
    newArray[index2] = firstObject;
    setFormInputs(newArray);
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ["input", "select", "button"],
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
    width: "95%",
    flex: 1,
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    maxHeight: "85%",
    overflowY: "auto",
    height: "600px",
  };

  return (
    <div ref={drop} style={dropZoneStyle}>
      <h2>Form Builder</h2>
      {formInputs.map((input, index) => (
        <div className="form-row" key={input.id}>
          {console.log("input : ", input)}
          <label className="form-label" htmlFor={input.tagName}>
            {input.label}
          </label>
          {input.type == "input" && (
            <input
              className="form-input"
              type={input.InputType}
              id={input.id}
            />
          )}

          {input.type == "select" && (
            <select className="form-input" id={input.id}>
              {input?.selectOption?.map((o) => {
                return <option>{o}</option>;
              })}
            </select>
          )}

          {input.type == "button" && (
            <button  className="form-input" type={input.InputType}>{input.label}</button>
          )}

          <div className="btn-group">
            <a
              className="edit-icon"
              onClick={() => handleEdit(index)}
              title="edit"
            >
              <FaEdit color="#FFF" />
            </a>
            <a
              className="delete-icon"
              onClick={() => handleDelete(input.label)}
              title="delete"
            >
              <RiDeleteBinLine color="#FFF" />
            </a>
            <a
              className="copy-icon"
              onClick={() => handleCopy(index)}
              title="copy"
            >
              <AiOutlineCopy color="#FFF" />
            </a>
            {formInputs.length > 1 && formInputs.length - 1 != index ? (
              <a
                className="down-icon"
                title="down"
                onClick={() => handleArrangment(index, "down")}
              >
                <FaArrowDown color="#FFF" />
              </a>
            ) : null}

            {formInputs.length > 1 && index != 0 ? (
              <a
                className="up-icon"
                title="up"
                onClick={() => handleArrangment(index, "up")}
              >
                <FaArrowUp color="#FFF" />
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropZone;
