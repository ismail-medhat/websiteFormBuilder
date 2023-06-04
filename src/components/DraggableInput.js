import { useDrag } from "react-dnd";
import { FaKeyboard } from "react-icons/fa";

const DraggableInput = ({ InputType, label, tagName, id,icon,selectOption}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: tagName, label, tagName, id, InputType,selectOption },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: "#FFF",
        margin: "10px 4px",
        borderRadius:'5px',
        padding:'15px 5px',
        textAlign:'center',
        width:'45%',
        height:'100px',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        alignSelf:'center'
      }}
    >
      {icon}
      <h5 style={{fontSize:'14px'}}>{label}</h5>
    </div>
  );
};

export default DraggableInput;
