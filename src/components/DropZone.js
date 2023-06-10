import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const formObj = {
  id: `form_${Math.random().toString(36).substring(2)}_${Date.now()}`,
  title: "Login",
  name: "",
  method: "POST",
  action: "url to post form data",
  component: [],
};

const DropZone = () => {
  const [formInputs, setFormInputs] = useState([]);
  const [formSchema, setFormSchema] = useState({ ...formObj });
  const [showCrudButtons, setShowCrudButtons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formMethod, setFormMethod] = useState("POST");
  const [formAction, setFormAction] = useState("");
  const [formName, setFormName] = useState("");

  const handleMouseEnter = () => {
    setShowCrudButtons(true);
  };

  const handleMouseLeave = () => {
    setShowCrudButtons(false);
  };

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
    accept: [
      "checkbox",
      "checkboxGroup",
      "date",
      "file",
      "radioGroup",
      "select",
      "text",
      "textarea",
      "button",
    ],
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const renderFormElements = (element, index) => {
    const uniqeId = `input_${Math.random()
      .toString(36)
      .substring(2)}_${Date.now()}`;
    switch (element.type) {
      case "text":
        return (
          <div key={uniqeId} className="form-group">
            <label htmlFor={element.label}>{`${element.label}: `}</label>
            <input
              type={element.type}
              id={element.attributes.id}
              name={element.attributes.name}
              placeholder={element.attributes.placeholder}
              value={element.attributes.value}
              onChange={(val) => console.log("val : ", val)}
            />
          </div>
        );
      case "checkbox":
        return (
          <div key={uniqeId} className="checkbox-sigle">
            <input
              type={element.type}
              id={element.attributes.id}
              name={element.attributes.name}
            />
            <label htmlFor={element.attributes.value}>
              {element.attributes.label}
            </label>
          </div>
        );
      case "checkboxGroup":
        return (
          <div key={uniqeId}>
            {element.attributes.checkboxes.map((check) => {
              return (
                <div className="checkbox-group">
                  <input type="checkbox" id={check.id} name={check.name} />
                  <label htmlFor={check.value}>{check.label}</label>
                </div>
              );
            })}
          </div>
        );
      case "date":
        return (
          <div key={uniqeId} className="form-group">
            <label htmlFor={element.label}>{`${element.label}: `}</label>
            <input
              type={element.type}
              id={element.attributes.id}
              name={element.attributes.name}
              value={element.attributes.value}
              onChange={(val) => console.log("val : ", val)}
            />
          </div>
        );
      case "file":
        return (
          <div key={uniqeId} className="form-group">
            <label htmlFor={element.label}>{`${element.label}: `}</label>
            <input
              type={element.type}
              id={element.attributes.id}
              name={element.attributes.name}
              value={element.attributes.value}
              onChange={(val) => console.log("val : ", val)}
            />
          </div>
        );
      case "radioGroup":
        return (
          <div key={uniqeId}>
            {element.attributes.radios.map((check) => {
              return (
                <div className="checkbox-group">
                  <input type="radio" id={check.id} name={check.name} />
                  <label htmlFor={check.value}>{check.label}</label>
                </div>
              );
            })}
          </div>
        );
      case "select":
        return (
          <div key={uniqeId} class="form-group">
            <label htmlFor={element.label}>{`${element.label}: `}</label>
            <select id={element.attributes.id} name={element.attributes.name}>
              {element.attributes.options.map((option) => {
                return <option value={option}>{option}</option>;
              })}
            </select>
          </div>
        );
      case "textarea":
        return (
          <div key={uniqeId} className="form-group">
            <label htmlFor={element.label}>{`${element.label}: `}</label>
            <textarea
              id={element.attributes.id}
              name={element.attributes.name}
              placeholder={element.attributes.placeholder}
              rows={element.attributes.rows}
              cols={element.attributes.cols}
            >
              {element.attributes.value}
            </textarea>
          </div>
        );
      case "button":
        return (
          <div key={uniqeId}>
            <br></br>
            <button type="submit">Login</button>
          </div>
        );
    }
  };

  const generateFormSchema = () => {
    setFormSchema((prevState) => ({
      ...prevState,
      component: [...formInputs],
    }));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleFormEdit = () => {
    console.log("first");
  };

  const isActive = canDrop && isOver;
  const dropZoneStyle = {
    border: isActive ? "2px dashed blue" : "2px dashed gray",
    padding: "16px",
    width: "100%",
    flex: 1,
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    maxHeight: "500px",
    overflowY: "auto",
    // height: "500px",
  };

  const dropZoneContainerStyle = {
    padding: "3px 16px",
    width: "95%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "1500px",
  };

  return (
    <div style={dropZoneContainerStyle}>
      <div ref={drop} style={dropZoneStyle}>
        <a onClick={() => openModal()} title="edit">
          <FaEdit />
        </a>
        <form method={formSchema.method} action={formSchema.method}>
          <h2>{formSchema.title}</h2>
          {formInputs?.map((element, index) => {
            return (
              <div
                className="form-group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {renderFormElements(element, index)}
                {showCrudButtons && (
                  <div className="crud-buttons">
                    <a
                      className="edit-icon"
                      onClick={() => handleEdit(index)}
                      title="edit"
                    >
                      <FaEdit color="#FFF" />
                    </a>
                    <a
                      className="delete-icon"
                      onClick={() => handleDelete(element.label)}
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
                )}
              </div>
            );
          })}
        </form>
      </div>
      <div style={{ margin: "10px" }}>
        <a
          className="down-icon"
          title="down"
          onClick={() => generateFormSchema()}
        >
          View Form formSchema Object
        </a>

        <pre className="object-viewer">
          <code>{JSON.stringify(formSchema, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default DropZone;
