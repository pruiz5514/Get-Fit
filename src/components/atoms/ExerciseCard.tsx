import { useDispatch, useSelector } from "react-redux"
import { IExerciseDBResponse } from "../../App/core/application/dto/excersiceDB/exerciseDB-response.dto"
import { RootState } from "../../redux/store"
import { FaCheck } from "react-icons/fa"
import { IoAdd } from "react-icons/io5"
import { addExercise } from "../../redux/features/newRutineSlice"


interface IExerciseCardProps {
    exercise: IExerciseDBResponse
    onClick : () => void
}

const ExerciseCard:React.FC<IExerciseCardProps> = ({exercise, onClick}) => {
  const rutineSelection = useSelector((state: RootState) => state.newRoutine.routines);

  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, exercise:IExerciseDBResponse )=> {
    event.stopPropagation();
    dispatch(addExercise(exercise))
  }

  const renderButton = (exerciseRutine:IExerciseDBResponse)=> {
    const isSelected = rutineSelection.some(exercise => exercise.id === exerciseRutine.id );

    if(isSelected) {
      return <span><FaCheck /></span>
    }
    else{
      return <button className="text-2xl cursor-pointer" onClick={(event)=>handleClick(event, exercise)}> <IoAdd /> </button>
    }
  }


  return (
    <div onClick={onClick} className="w-[350px] h-[330px] bg-charcoal flex flex-col gap-4 rounded-lg pb-3 cursor-pointer relative">
        <img className="w-full h-[250px] rounded-t-lg" src={exercise.gifUrl} alt={exercise.name} />
        <h3 className="text-lightGray text-lg capitalize px-2">{exercise.name}</h3>
        
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-lightGray flex justify-center items-center">
          {renderButton(exercise)}
        </div>
    </div>
  )
}

export default ExerciseCard