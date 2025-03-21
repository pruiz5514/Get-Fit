import { IoClose } from "react-icons/io5"
import Modal from "../atoms/Modal"
import { IExerciseDBResponse } from "../../App/core/application/dto/excersiceDB/exerciseDB-response.dto";

interface IExerciseModalProps{
    onClick: ()=> void;
    exercise: IExerciseDBResponse
}

const ExerciseModal:React.FC<IExerciseModalProps> = ({onClick, exercise})=>{
  return (
    <Modal>
        <div className="w-full max-w-[600px] min-w-[300px] bg-white rounded-lg relative p-6 flex flex-col gap-6"> 
            <button onClick={onClick} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
            <img className="mx-auto" src={exercise.gifUrl} alt={exercise.name} />
            <h1 className="capitalize text-2xl font-bold">{exercise.name}</h1>
            <p>{exercise.instructions}</p>
        </div>
        
    </Modal>
  )
}

export default ExerciseModal