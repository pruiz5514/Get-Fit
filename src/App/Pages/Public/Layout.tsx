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
        <main className="w-full min-h-[100vh] bg-coal flex justify-center">
            <div className="w-full max-w-[1600px] px-4">
                {children}
            </div>
            
        </main>
    </>
  )
}

export default Layout