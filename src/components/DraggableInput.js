import { useDrag } from "react-dnd";
import { FaKeyboard } from "react-icons/fa";

const DraggableInput = ({  label, id,icon,schema}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type:schema.type , ...schema },
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
        margin: "5px 4px",
        borderRadius:'3px',
        padding:'5px',
        textAlign:'center',
        height:'80px',
        border: "1.5px solid #DDD"
      }}
    >
      {icon}
      <h5 style={{fontSize:'14px' ,color:'#AAA'}}>{label}</h5>
    </div>
  );
};

export default DraggableInput;
