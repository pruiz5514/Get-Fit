import { Link, useParams } from "react-router-dom";
import Layout from "./PrivateLayout"
import Button from "../../../components/atoms/Button";
import RoutineInfoCard from "../../../components/molecules/RoutineInfoCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { RoutinesService } from "../../infrastructure/services/routines.service";
import { useEffect, useState } from "react";
import { IRoutineByID, IRoutineExercise } from "../../core/application/dto/routines/get-routineById.dto";

const RoutineInfo = () => {
  const { id } = useParams(); 

  const token = useSelector((state: RootState) => state.auth.token);
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token) return;
  const useRoutinesService = new RoutinesService(baseUrl,token);
  const [routineInfo, setRoutineInfo] = useState<IRoutineByID>();

  useEffect(()=>{
    const getRoutineById = async() => {
        setRoutineInfo(await useRoutinesService.getRoutineById('routines',String(id)))
    }
    getRoutineById()
  }, [])

  return (
    <Layout>
        <section className="py-6">
            <article>
                <h1 className="text-softElectricBlue text-4xl font-bold text-center mb-6 capitalize">{routineInfo?.name}</h1>
                <div className="flex justify-between">
                    <Link to={`/rutinas/agregar-ejercicio/${id}`}> <Button>Agregar ejercicios</Button> </Link> 
                    <button className="bg-red-600  text-white px-3 py-2 rounded-lg cursor-pointer">Eliminar rutina</button>
                </div>
            </article>
            <article className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-y-8 gap-x-8 justify-items-center lg:justify-items-start">
                {
                    routineInfo?.routine_exercises.map((exercise:IRoutineExercise) => (
                        <RoutineInfoCard key={exercise.id} exerciseId={String(exercise.exercise_id)}/>
                    ))
                }
                
            </article>
        </section>
    </Layout>
  )
}

export default RoutineInfo