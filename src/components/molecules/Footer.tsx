import { FaGithub } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full  bg-darkGrey flex flex-col items-center text-white p-6 text-center gap-2">
        <p>Copyright © 2025 GetFit </p>
        <p className="flex items-center gap-4"> Creado y diseñado por Pablo Ruiz <Link to="https://github.com/pruiz5514" > <span className="text-xl text-sof"><FaGithub /></span> </Link> <Link to="https://portafolio-pablo-ruiz.vercel.app/"><span className="text-xl"><TbWorldWww /></span> </Link> </p>
        <p>Referencia de video: Film, S. (2021) Gym Promo video, YouTube. Disponible en: <Link to="https://www.youtube.com/watch?v=4-zjQvTDnbw"> <span className="underline">Video</span> </Link>  </p>
    </footer>
  )
}

export default Footer