import { useEffect, useState } from "react"
import MuscleSelect from "../../../components/molecules/MuscleSelect"
import Layout from "./PrivateLayout"
import ExerciseCard from "../../../components/molecules/ExerciseCard";
import { ExerciseDBService } from "../../infrastructure/services/exercisesDB.service";
import { IExerciseDBResponse } from "../../core/application/dto/excersiceDB/exerciseDB-response.dto";

const NewRutine = () => {
  const userExerciseDBServie = new ExerciseDBService();
  const [selectedMuscle, setSelectedMuscle] = useState('back');
  const [exercises, setExercises] = useState<IExerciseDBResponse[]>([]);

  useEffect(()=>{
    const exercisesFetch = async() =>{
        const exercisesPerMuscle = await userExerciseDBServie.getExerciseByMuscle(selectedMuscle);
        setExercises(exercisesPerMuscle)
    } 
    exercisesFetch()
  }, [selectedMuscle])

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    setSelectedMuscle(event.target.value)
  }

  return (
    <Layout>
        <section className="py-6">
            <article className="mb-10">
                <MuscleSelect onChange={handleSelect}/>
            </article>
            <article className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-y-8 gap-x-4 justify-items-center lg:justify-items-start">
                {
                    exercises?.map((exercise:IExerciseDBResponse)=> (
                        <ExerciseCard exercise={exercise} key={exercise.id}/>
                    ))
                }
            </article>
        </section>
    </Layout>
  )
}

export default NewRutine