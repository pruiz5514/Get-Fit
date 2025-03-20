import { IExerciseDBResponse } from "../../App/core/application/dto/excersiceDB/exerciseDB-response.dto"

interface IExerciseCardProps {
    exercise: IExerciseDBResponse
}

const ExerciseCard:React.FC<IExerciseCardProps> = ({exercise}) => {
  return (
    <div className="w-[350px] h-[300px] bg-[#333333] flex flex-col gap-4 rounded-lg pb-3">
        <img className="w-full h-[250px] rounded-t-lg" src={exercise.gifUrl} alt={exercise.name} />
        <h3 className="text-lightGray text-lg capitalize px-2">{exercise.name}</h3>
    </div>
  )
}

export default ExerciseCard