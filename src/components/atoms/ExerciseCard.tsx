import { IExerciseDBResponse } from "../../App/core/application/dto/excersiceDB/exerciseDB-response.dto"

interface IExerciseCardProps {
    exercise: IExerciseDBResponse
    onClick : () => void
}

const ExerciseCard:React.FC<IExerciseCardProps> = ({exercise, onClick}) => {
  return (
    <div onClick={onClick} className="w-[350px] h-[330px] bg-charcoal flex flex-col gap-4 rounded-lg pb-3 cursor-pointer">
        <img className="w-full h-[250px] rounded-t-lg" src={exercise.gifUrl} alt={exercise.name} />
        <h3 className="text-lightGray text-lg capitalize px-2">{exercise.name}</h3>
    </div>
  )
}

export default ExerciseCard