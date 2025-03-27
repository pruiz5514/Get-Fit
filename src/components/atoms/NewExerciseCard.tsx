import React from "react"
import { IExerciseDBResponse } from "../../App/core/application/dto/excersiceDB/exerciseDB-response.dto"
import { RiDeleteBin5Fill } from "react-icons/ri"

interface INewExerciseCardProps{
    exercise: IExerciseDBResponse
    onClick: () => void
}

const NewExerciseCard: React.FC<INewExerciseCardProps> = ({exercise, onClick}) => {
  return (
    <div className="flex justify-between items-center border-b-2 border-lightGray">
        <div className="flex gap-4 items-center py-3 ">
            <img className="w-16 h-16 rounded-full" src={exercise.gifUrl} alt={exercise.name} />
            <h3 className="capitalize text-lg">{exercise.name}</h3>
        </div>
        <button onClick={onClick} className="text-red-600 text-xl cursor-pointer"><RiDeleteBin5Fill /> </button>
    </div>
  )
}

export default NewExerciseCard