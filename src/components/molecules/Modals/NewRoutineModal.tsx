import { IoClose } from "react-icons/io5";
import Modal from "../../atoms/Modal/Modal"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import NewRoutineForm from "../../organism/Forms/NewRoutineForm";
import NewRoutineExerciseForm from "../../organism/Forms/NewRoutineExerciseForm";

interface INewRoutineModal{
    onClick: ()=> void;
}

const NewRoutineModal: React.FC<INewRoutineModal> = ({onClick}) => {
  const view = useSelector((state: RootState) => state.newRoutineView.view)

  return (
    <Modal>
      <button onClick={onClick} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
      {
        view === "routineName" ? (<NewRoutineForm/>) :
        <NewRoutineExerciseForm closeModal={onClick}/>
      }
    </Modal>
  )
}

export default NewRoutineModal