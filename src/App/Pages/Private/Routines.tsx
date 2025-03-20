import { useEffect, useState } from "react"
import RoutineContainer from "../../../components/organism/RoutineContainer"
import Layout from "./PrivateLayout"
import { RoutinesService } from "../../infrastructure/services/routines.service"
import { IRoutinesResponse } from "../../core/application/dto/routines/get-routines.dto";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";

function Routines(){
  const token = useSelector((state: RootState) => state.auth.token);
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token) return;
  const useRoutinesService = new RoutinesService(baseUrl,token);
  
  const [routines, setRoutines] = useState<IRoutinesResponse[]| null> (null)

  useEffect(()=>{
    
    const getRoutines = async () =>{
      setRoutines(await useRoutinesService.getRoutines('routines'))
    }
    getRoutines()
  },[])

  console.log(routines)

  return (
    <Layout>
      <section className="mt-6 mb-8 flex flex-col items-center">
        <h1 className="text-softElectricBlue text-center text-4xl mb-8 md:mt-10">Mis rutinas</h1>
        <Link to="/nueva-rutina"><button className="px-3 py-2 bg-darkGrey rounded-lg text-lightGray  text-xl"> <span className="flex justify-between items-center gap-2"> Nueva rutina <CgGym /></span></button></Link>
      </section>
      
      <section className="flex flex-col gap-6">
        {
          routines?.length === 0 ? (<p className="text-center text-lightGray text-2xl">No hay rutinas creadas</p>):

          routines?.map((routine:IRoutinesResponse) => (
            <RoutineContainer key={routine.id} routine={routine}/>
          ))
        }
      </section>
    </Layout>
  )
}

export default Routines