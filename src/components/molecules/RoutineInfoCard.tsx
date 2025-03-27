import React, { useEffect, useState } from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { ExerciseDBService } from '../../App/infrastructure/services/exercisesDB.service'
import { IExerciseDBResponse } from '../../App/core/application/dto/excersiceDB/exerciseDB-response.dto'

interface IRoutineInfoCardProps{
    exerciseId: string
}

const RoutineInfoCard:React.FC<IRoutineInfoCardProps> = ({exerciseId}) => {
  const userExerciseDBService = new ExerciseDBService();
  const [exerciseInfo, setExerciseInfo] = useState<IExerciseDBResponse>()

  useEffect( ()=> {
    const getExerciseById = async () => {
        setExerciseInfo(await userExerciseDBService.getExerciseById(exerciseId))
    }
    getExerciseById()
  },[exerciseId])

  return (
    <div className='w-full max-w-[600px] min-w-[340px] bg-darkGrey h-[80px] rounded-lg flex items-center justify-between px-4'>
        <div className='flex items-center gap-3'>
            <img className='w-12 h-12 rounded-full' src={exerciseInfo?.gifUrl} alt={exerciseInfo?.name} />
            <h3 className='text-lightGray text-lg capitalize'>{exerciseInfo?.name}</h3>
        </div>
        <button className="text-red-600 text-xl cursor-pointer"><RiDeleteBin5Fill /> </button>
    </div>
  )
}

export default RoutineInfoCard