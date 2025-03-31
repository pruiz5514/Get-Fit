import { useParams } from "react-router-dom";
import Layout from "./PrivateLayout"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { RoutinesService } from "../../infrastructure/services/routines.service";
import { useEffect, useState } from "react";
import { IRoutineByID } from "../../core/application/dto/routines/get-routineById.dto";
import StartExerciseContainer from "../../../components/organism/StartExerciseContainer";

const StartRoutine = () => {
  const { id } = useParams(); 

  const token = useSelector((state: RootState) => state.auth.token);
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token) return;
  const useRoutinesService = new RoutinesService(baseUrl,token);
  const [routineInfo, setRoutineInfo] = useState<IRoutineByID>();

//   useEffect(()=>{
//     const getRoutineById = async() => {
//         setRoutineInfo(await useRoutinesService.getRoutineById('routines',String(id)))
//     }
//     getRoutineById()
//   }, [])

  return (
    <Layout>
        <section className="py-6">
            <h1 className="text-softElectricBlue text-4xl font-bold text-center mb-6 capitalize">{routineInfo?.name}</h1>
            <article>
                <StartExerciseContainer/>
            </article>
        </section>
    </Layout>
  )
}

export default StartRoutine