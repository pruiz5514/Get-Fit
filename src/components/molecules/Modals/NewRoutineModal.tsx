import { IoClose } from "react-icons/io5";
import { IExerciseDBResponse } from "../../../App/core/application/dto/excersiceDB/exerciseDB-response.dto";
import Modal from "../../atoms/Modal/Modal"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import NewExerciseCard from "../../atoms/NewExerciseCard";
import { removeExercise } from "../../../redux/features/newRutineSlice";

interface INewRoutineModal{
    onClick: ()=> void;
}

const NewRoutineModal: React.FC<INewRoutineModal> = ({onClick}) => {
  const rutineSelection = useSelector((state: RootState) => state.newRoutine.routines)
  const dispatch = useDispatch();

  return (
    <Modal>
      <button onClick={onClick} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
      <div className="mt-8">
        {
          rutineSelection.map((exercise:IExerciseDBResponse)=> (
            <NewExerciseCard onClick={()=>dispatch(removeExercise(exercise))} exercise={exercise}/>
          ))
        }
      </div>
    </Modal>
  )
}

export default NewRoutineModal