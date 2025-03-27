import { IRoutinesResponse } from "../../App/core/application/dto/routines/get-routines.dto";
import Button from "../atoms/Button"

interface IRoutineContainerProps{
    routine: IRoutinesResponse
}

const RoutineContainer:React.FC<IRoutineContainerProps> = ({routine}) => {
  return (
    <article className="w-full h-[120px] bg-darkGrey rounded-2xl p-4 flex flex-col gap-3 cursor-pointer" >
        <h1 className="text-lightGray text-2xl">{routine.name.charAt(0).toUpperCase() + routine.name.slice(1)}</h1>

        <div className="w-full">
            <Button width="w-full">Empezar rutina </Button>
        </div>
        
    </article>
  )
}

export default RoutineContainer