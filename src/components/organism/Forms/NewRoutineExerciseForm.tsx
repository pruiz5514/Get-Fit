import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IExerciseDBResponse } from '../../../App/core/application/dto/excersiceDB/exerciseDB-response.dto';
import NewExerciseCard from '../../atoms/NewExerciseCard';
import { removeExercise, resetRoutines } from '../../../redux/features/newRutineSlice';
import Button from '../../atoms/Button';
import { RoutinesService } from '../../../App/infrastructure/services/routines.service';
import { setNewRoutineInfo } from '../../../redux/features/NewRoutineInfoSlice';
import { changeView } from '../../../redux/features/NewRoutineViewSlice';
import { successAlert } from '../../../App/infrastructure/utils/alerts';
import { useNavigate } from 'react-router-dom';

interface INewRoutineExerciseFormProps{
    closeModal: ()=> void
}

const NewRoutineExerciseForm:React.FC<INewRoutineExerciseFormProps> = ({closeModal}) => {
  const routineSelection = useSelector((state: RootState) => state.newRoutine.routines)
  const routineInfo =  useSelector((state: RootState) => state.newRoutineInfo.newRoutineInfo)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.auth.token);
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token) return;
    const useRoutinesService = new RoutinesService(baseUrl,token);

  const addExercises = async()=>{
    const routineExerciseId = routineSelection.map((exercise)=> exercise.id)
    if (!routineInfo || !routineInfo.id) {
        console.error("Error: La rutina no está definida");
        return;
    }
    const exercises = {
        id_routine: routineInfo.id,
        exercise_id: routineExerciseId
    }

    await useRoutinesService.postExerciseRoutine('routine_exercise',exercises)
    successAlert('Ejercicios agregados exitosamente')
    closeModal()
    dispatch(setNewRoutineInfo(null))
    dispatch(changeView("routineName"))
    dispatch(resetRoutines())
    navigate('/rutinas')
  }

  return (
    <div className='w-full flex flex-col gap-6'>
        <h1 className='text-center text-2xl text-softElectricBlue font-bold capitalize'>{routineInfo?.name}</h1>
        <div>
            {
                routineSelection.map((exercise:IExerciseDBResponse)=> (
                    <NewExerciseCard onClick={()=>dispatch(removeExercise(exercise))} exercise={exercise}/>
                ))
            }
        </div>
        <Button onClick={addExercises}>Agregar ejercicios</Button>
    </div> 
  )
}

export default NewRoutineExerciseForm