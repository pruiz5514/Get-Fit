import { useEffect, useState } from 'react';
import Layout from './PrivateLayout'
import { IExerciseDBResponse } from '../../core/application/dto/excersiceDB/exerciseDB-response.dto';
import { ExerciseDBService } from '../../infrastructure/services/exercisesDB.service';
import { useSearchParams } from 'react-router-dom';
import MuscleSelect from '../../../components/molecules/MuscleSelect';
import ExerciseCard from '../../../components/atoms/ExerciseCard';
import Pagination from '../../../components/molecules/Pagination';
import ExerciseModal from '../../../components/molecules/Modals/ExerciseModal';
import AdditionExerciseModal from '../../../components/molecules/Modals/AdditionExerciseModal';

function AddNewExercise() {
  const userExerciseDBService = new ExerciseDBService();
  const [selectedMuscle, setSelectedMuscle] = useState('back');
  const [exercises, setExercises] = useState<IExerciseDBResponse[]>([]);
  const [exercisesAdition, setExercisesAdition] = useState<IExerciseDBResponse[]>([]);
  const [routineModal, setRoutineModal] = useState(false)
  const [exerciseModal, setExerciseModal] = useState(false)
  const [exerciseSelected, setExerciseSelected] = useState<IExerciseDBResponse>()

  const [searchParams, setSearchParams] = useSearchParams();

  const limit = Number(searchParams.get("limit")) || 20;
  const offset = Number(searchParams.get("offset")) || 0;

   useEffect(()=>{
      const exercisesFetch = async() =>{
          const exercisesPerMuscle = await userExerciseDBService.getExerciseByMuscle(`${selectedMuscle}?limit=${limit}&offset=${offset}`);
          setExercises(exercisesPerMuscle)
      } 
      exercisesFetch()
    }, [selectedMuscle, offset])

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>)=> {
      setSelectedMuscle(event.target.value)
      setSearchParams({offset:"0"}) 
    }
  
    const handleExerciseModal = (exercise:IExerciseDBResponse)=>{
      setExerciseSelected(exercise)
      setExerciseModal(true)
    }

    const addNewExercise = (event: React.MouseEvent<HTMLButtonElement>, exercise:IExerciseDBResponse ) => {
      event.stopPropagation();
      setExercisesAdition((prevExercises) => [...prevExercises, exercise]);
    }

    const resetModal = ()=>{
      setExercisesAdition([])
    }

    const removeExercise = (exerciseId: string)=>{
      setExercisesAdition((prevExercises) => prevExercises.filter(ex => ex.id !== exerciseId));
    }

  return (
    <Layout>
      <section className="py-6">
            <article className="mb-10 flex justify-between">
                <MuscleSelect onChange={handleSelect}/>
                <button onClick={()=>setRoutineModal(true)} className="px-3 py-2 bg-charcoal rounded-lg text-lightGray text-xl cursor-pointer">Rutina {exercisesAdition.length}</button>
            </article>
            <article className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-y-8 gap-x-4 justify-items-center lg:justify-items-start">
                {
                    exercises?.map((exercise:IExerciseDBResponse)=> (
                        <ExerciseCard onClick={()=>handleExerciseModal(exercise)} exercise={exercise} key={exercise.id} routineArray={exercisesAdition} addExercise={(event) => addNewExercise(event, exercise)}/>
                    ))
                }
            </article>

            <article className="w-full flex justify-center mt-10">
                <Pagination data={exercises}/>
            </article>

            { exerciseModal && exerciseSelected && <ExerciseModal exercise={exerciseSelected} onClick={()=>setExerciseModal(false)} /> }
            
            { routineModal && exercisesAdition.length > 0 && <AdditionExerciseModal closeModal={()=>setRoutineModal(false)} exerciseArray={exercisesAdition} onClick={resetModal} removeExercise={(exerciseId)=>removeExercise(exerciseId)}/> }
        </section>
    </Layout>
  )
}

export default AddNewExercise