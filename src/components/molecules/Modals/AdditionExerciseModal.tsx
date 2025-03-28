import { IoClose } from "react-icons/io5";
import Modal from "../../atoms/Modal/Modal"
import AdditionsExerciseForm from "../../organism/Forms/AdditionExerciseForm";
import { IExerciseDBResponse } from "../../../App/core/application/dto/excersiceDB/exerciseDB-response.dto";

interface IAdditionExerciseModal{
    closeModal: ()=> void
    onClick: ()=> void;
    exerciseArray: IExerciseDBResponse[]
    removeExercise : (exerciseId: string)=> void
}

const AdditionExerciseModal: React.FC<IAdditionExerciseModal> = ({closeModal ,onClick, exerciseArray, removeExercise}) => {

  return (
    <Modal>
      <button onClick={closeModal} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <AdditionsExerciseForm  exerciseArray={exerciseArray} closeModal={onClick} removeExercise={(exerciseId)=>removeExercise(exerciseId)}/>
    </Modal>
  )
}

export default AdditionExerciseModal