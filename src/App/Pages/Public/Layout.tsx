import Button from "../../../components/atoms/Button"
import { Header } from "../../../components/organism/Header"

interface LayoutI {
    children: React.ReactNode
}

const Layout:React.FC<LayoutI> = ({children}) => {
  return (
    <>
        <Header>
            <li ><Button>Registrarse</Button></li>
            <li ><Button>Inicar sesión</Button></li>
        </Header>
        {children}
    </>
  )
}

export default Layout