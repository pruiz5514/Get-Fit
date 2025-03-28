import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IExerciseDBResponse } from '../../../App/core/application/dto/excersiceDB/exerciseDB-response.dto';
import NewExerciseCard from '../../atoms/NewExerciseCard';
import Button from '../../atoms/Button';
import { RoutinesService } from '../../../App/infrastructure/services/routines.service';
import { successAlert } from '../../../App/infrastructure/utils/alerts';
import { useNavigate, useParams } from 'react-router-dom';

interface IAdditionExerciseFormProps{
    closeModal: ()=> void
    exerciseArray: IExerciseDBResponse[]
    removeExercise : (exerciseId: string)=> void
}

const AdditionsExerciseForm:React.FC<IAdditionExerciseFormProps> = ({closeModal, exerciseArray, removeExercise}) => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.auth.token);
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token) return;
    const useRoutinesService = new RoutinesService(baseUrl,token);

  const addExercises = async()=>{
    const routineExerciseId = exerciseArray.map((exercise)=> exercise.id)

    const exercises = {
        id_routine: Number(id),
        exercise_id: routineExerciseId
    }

    await useRoutinesService.postExerciseRoutine('routine_exercise',exercises)
    successAlert('Ejercicios agregados exitosamente')
    closeModal()
    navigate(`/rutinas/${id}`)
  }

  return (
    <div className='w-full flex flex-col gap-6'>
        <div>
            {
                exerciseArray.map((exercise:IExerciseDBResponse)=> (
                    <NewExerciseCard onClick={()=>removeExercise(exercise.id)} exercise={exercise} />
                ))
            }
        </div>
        <Button onClick={addExercises}>Agregar ejercicios</Button>
    </div> 
  )
}

export default AdditionsExerciseForm