import { IoClose } from "react-icons/io5"
import { IExerciseDBResponse } from "../../../App/core/application/dto/excersiceDB/exerciseDB-response.dto";
import Modal from "../../atoms/Modal/Modal";


interface IExerciseModalProps{
    onClick: ()=> void;
    exercise: IExerciseDBResponse
}

const ExerciseModal:React.FC<IExerciseModalProps> = ({onClick, exercise})=>{
  return (
    <Modal>
        <button onClick={onClick} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <img className="mx-auto" src={exercise.gifUrl} alt={exercise.name} />
        <h1 className="capitalize text-2xl font-bold">{exercise.name}</h1>
        <p>{exercise.instructions}</p>
    </Modal>
  )
}

export default ExerciseModal