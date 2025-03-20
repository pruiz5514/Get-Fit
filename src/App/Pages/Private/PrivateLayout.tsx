import { Link, useNavigate } from "react-router-dom"
import Button from "../../../components/atoms/Button"
import { Header } from "../../../components/organism/Header"
import { useDispatch } from "react-redux"
import { logout } from "../../../redux/features/authSlice"


interface LayoutI {
    children: React.ReactNode
}

const Layout:React.FC<LayoutI> = ({children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    navigate('/')
  }

  return (
    <>
        <Header linkLogo="/dashboard">
            <li><Link to='/dashboard'>Inicio</Link></li>
            <li><Link to='/rutinas'>Rutinas</Link></li>
            <li><Link to='/iniciar-sesion'>Perfil</Link></li>
            <li><Link to='/iniciar-sesion'><Button onClick={logOut} >Cerrar sesión</Button></Link></li>
        </Header>
        <main className="w-full min-h-[100vh] bg-coal flex justify-center">
            <div className="w-full max-w-[1600px] px-4 mt-[85px]">
                {children}
            </div>
        </main>
    </>
  )
}

export default Layout