import { useDrag } from 'react-dnd';
import { RiDeleteBinLine } from 'react-icons/ri';



const DraggableInput = ({ InputType, label,tagName,id }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: tagName, label,tagName,id,InputType },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h4>{label}</h4>
    </div>
  );
};

export default DraggableInput;

