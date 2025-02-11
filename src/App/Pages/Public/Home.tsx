import { CgGym } from "react-icons/cg"
import Hero from "../../../components/organism/Hero"
import Layout from "./Layout"

const Home = () => {
  return (
    <Layout>
        <Hero/>
        <section className="mt-[calc(100vh+30px)] flex flex-col gap-10 pb-10">
          <article className="text-white grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            <div className="flex flex-col gap-6 md:justify-center"> 
              <h1 className="text-3xl md:text-5xl font-bold">Control De Entrenamientos</h1>
              <p className="">Tu compañero ideal para entrenar: registra tu progreso de forma simple, sigue tu evolución y alcanza tus objetivos de fitness de manera más inteligente.</p>
              <ul className="flex flex-col gap-3">
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span> Registro de Entrenamientos Intuitivo</li>
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span>Planificador de Rutinas Avanzado </li>
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span>Biblioteca de Ejercicios Completa </li>
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span>Progresión Automática de Cargas </li>
              </ul>
            </div>
            <div>
              <img className="rounded-lg w-full md:h-[480px]" src="https://estaticos.elcolombiano.com/binrepository/686x445/0c0/0d0/none/11101/NYLE/gimnasios_44150681_20240111081828.png" alt="gym" />
            </div>
          </article>
          <article className="text-white grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            <div className="flex flex-col gap-6 md:justify-center md:order-2"> 
              <h1 className="text-3xl font-bold md:text-5xl">Medición de Progreso Avanzada</h1>
              <p >Supervisa tu evolución de forma precisa y mantén el control de cada logro en tu camino hacia el éxito.</p>
              <ul className="flex flex-col gap-3">
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span> Seguimiento Detallado de Métricas ClaveSeguimiento Detallado de Métricas Clave</li>
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span>Gráficos de Progreso Dinámicos </li>
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span>Comparación de Rendimiento </li>
                <li className=" flex items-center"> <span className="text-softElectricBlue text-3xl mr-3"><CgGym /></span>Progreso Basado en Tiempos y Rendimiento </li>
              </ul>
            </div>
            <div className="md:order-1">
              <img className="rounded-lg w-full md:h-[480px] " src="https://static.anychart.com/images/gallery/v8/line-charts-acceptance-of-same-sex-relationships-darkturquoise.png" alt="gym" />
            </div>
          </article>
        </section>
    </Layout>
  )
}

export default Home