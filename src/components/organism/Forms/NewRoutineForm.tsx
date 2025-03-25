import { useDispatch, useSelector } from 'react-redux';
import { RoutinesService } from '../../../App/infrastructure/services/routines.service'
import Button from '../../atoms/Button'
import { RootState } from '../../../redux/store';
import { changeView } from '../../../redux/features/NewRoutineViewSlice';
import { setNewRoutineInfo } from '../../../redux/features/NewRoutineInfoSlice';



const NewRoutineForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token) return;
  const useRoutinesService = new RoutinesService(baseUrl,token);


  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const newRoutine = {
      name: formData.get("routine") as string
    }
    const routineRespone = await useRoutinesService.postRoutine('routines', newRoutine);
    dispatch(changeView('routineExercises'))
    dispatch(setNewRoutineInfo(routineRespone.routine))

  }
  return (
    <form className='w-full flex flex-col gap-6 pt-6' onSubmit={handleSubmit}>
        <input type="text" name='routine' className='w-full h-10 border-b-2 border-[#E0E0E0] text-center text-2xl focus:outline-none' placeholder='Nombre de la rutina' required/>
        <Button>Crear Rutina</Button>
        
    </form>
  )
}

export default NewRoutineForm