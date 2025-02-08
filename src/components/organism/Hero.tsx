import Button from "../atoms/Button"

const Hero = () => {
  return (
    <section className="absolute w-full h-[calc(100vh-85px)] left-0">
        <video autoPlay muted loop className="absolute left-0 top-0 w-full h-full object-cover z-0 bg-black">
            <source src="/video/video.mov" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <h1 className="text-3xl text-center  text-white font-bold">Inicia Tu Transformación<br /> <span className="text-softElectricBlue">Alcanza Tu Mejor Versión</span>  <br /> <span>Entrena, Mide, Mejora.</span> </h1>
            <p className="my-14 px-4 text-white text-center ">Registra cada repetición, controla tu progreso físico y mental, establece metas desafiantes y alcanza tu mejor versión. Con GetFit, cada esfuerzo cuenta y cada logro te acerca a tu máximo potencial.</p>
            <Button>Empezar ahora</Button>
        </div>
    </section>

  )
}

export default Hero