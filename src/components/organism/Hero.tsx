
const Hero = () => {
  return (
    <section className="absolute w-full h-[calc(100vh-85px)] mt-[85px] left-0">
        <video autoPlay muted loop className="absolute left-0 top-0 w-full h-full object-cover z-0 bg-black">
            <source src="/video/video.mov" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <h1 className="text-3xl text-center  text-white font-bold md:text-7xl">Inicia Tu Transformación<br /> <span className="text-softElectricBlue">Alcanza Tu Mejor Versión</span>  <br /> <span>Entrena, Mide, Mejora.</span> </h1>
            <p className="my-14 px-4 w-full text-white text-center md:text-3xl md:px-40">Registra cada repetición, controla tu progreso físico y mental, establece metas desafiantes y alcanza tu mejor versión. Con GetFit, cada esfuerzo cuenta y cada logro te acerca a tu máximo potencial.</p>
            <button className="bg-softElectricBlue text-white px-3 py-2 rounded-lg cursor-pointer md:text-2xl md:px4 md:py-3"> Empezar ahora</button>
        </div>
    </section>

  )
}

export default Hero