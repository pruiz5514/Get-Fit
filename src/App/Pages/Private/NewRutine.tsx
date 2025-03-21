import { useEffect, useState } from "react"
import MuscleSelect from "../../../components/molecules/MuscleSelect"
import Layout from "./PrivateLayout"
import ExerciseCard from "../../../components/atoms/ExerciseCard";
import { ExerciseDBService } from "../../infrastructure/services/exercisesDB.service";
import { IExerciseDBResponse } from "../../core/application/dto/excersiceDB/exerciseDB-response.dto";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../components/molecules/Pagination";
import ExerciseModal from "../../../components/molecules/ExerciseModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const NewRutine = () => {
  const userExerciseDBServie = new ExerciseDBService();
  const [selectedMuscle, setSelectedMuscle] = useState('back');
  const [exercises, setExercises] = useState<IExerciseDBResponse[]>([]);
  const [exerciseSelected, setExerciseSelected] = useState<IExerciseDBResponse>()
  const [exerciseModal, setExerciseModal] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();

  const limit = Number(searchParams.get("limit")) || 20;
  const offset = Number(searchParams.get("offset")) || 0;

  const rutineSelection = useSelector((state: RootState) => state.newRoutine.routines)

  useEffect(()=>{
    const exercisesFetch = async() =>{
        const exercisesPerMuscle = await userExerciseDBServie.getExerciseByMuscle(`${selectedMuscle}?limit=${limit}&offset=${offset}`);
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

  return (
    <Layout>
        <section className="py-6">
            <article className="mb-10 flex justify-between">
                <MuscleSelect onChange={handleSelect}/>
                <button className="px-3 py-2 bg-charcoal rounded-lg text-lightGray text-xl cursor-pointer">Rutina {rutineSelection.length}</button>
            </article>
            <article className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-y-8 gap-x-4 justify-items-center lg:justify-items-start">
                {
                    exercises?.map((exercise:IExerciseDBResponse)=> (
                        <ExerciseCard onClick={()=>handleExerciseModal(exercise)} exercise={exercise} key={exercise.id}/>
                    ))
                }
            </article>

            <article className="w-full flex justify-center mt-10">
                <Pagination data={exercises}/>
            </article>

            { exerciseModal && exerciseSelected && <ExerciseModal exercise={exerciseSelected} onClick={()=>setExerciseModal(false)} /> }
            
        </section>
    </Layout>
  )
}

export default NewRutine