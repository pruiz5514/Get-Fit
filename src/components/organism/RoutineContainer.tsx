import { Link, useNavigate } from "react-router-dom";
import { IRoutinesResponse } from "../../App/core/application/dto/routines/get-routines.dto";
import Button from "../atoms/Button"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { errorAlert } from "../../App/infrastructure/utils/alerts";
import { SessionsService } from "../../App/infrastructure/services/session.service";
import { setCurrentSession } from "../../redux/features/CurrentSessionSlice";

interface IRoutineContainerProps{
    routine: IRoutinesResponse
    onClick : ()=> void
}


const RoutineContainer:React.FC<IRoutineContainerProps> = ({routine, onClick}) => {
  const navigate = useNavigate()

  const currentSession = useSelector((state:RootState) => state.currentSession)
  const dispatch = useDispatch();

  const startSessionHandle = (routine: IRoutinesResponse) => {
    if(currentSession.currentSession !== null && currentSession.currentSession.id !== routine.id){
      errorAlert(`La rutina ${currentSession.currentSession?.name} esta en curso, cancelala o completala para continuar`)
      console.log(currentSession)
    } else{
      dispatch(setCurrentSession(routine))
      navigate(`/empezar-rutina/${routine.id}`)
    }
  }
  
  return (
    <article onClick={onClick} className="w-full h-[120px] bg-darkGrey rounded-2xl p-4 flex flex-col gap-3 cursor-pointer" >
        <h1 className="text-lightGray text-2xl">{routine.name.charAt(0).toUpperCase() + routine.name.slice(1)}</h1>

        <div className="w-full">
            <Button width="w-full" onClick={()=>startSessionHandle(routine)}>Empezar rutina </Button>
        </div>
        
    </article>
  )
}

export default RoutineContainer