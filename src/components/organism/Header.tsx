import { CgGym } from "react-icons/cg"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"
import HeaderAside from "./HeaderAside"

interface IHeaderProps{
    children: React.ReactNode
}

export const Header: React.FC<IHeaderProps> = ({children}) => {
  const [header, setHeader] = useState(false);

  return (
    <header className="w-full bg-coal h-[80px] flex items-center justify-center">
        <nav className="max-w-[1600px] w-full px-4 flex justify-between items-center">
            <h1 className="text-white text-4xl flex">Get<span className="text-softElectricBlue flex gap-2 items-center">Fit <CgGym /></span></h1>
            <div>
                <button onClick={()=>setHeader(true)} className="text-white text-2xl md:hidden" ><RxHamburgerMenu /></button>
                <ul className="hidden md:flex gap-10 text-lg">
                    {children}
                   
                </ul>
                <div className=" md:hidden">
                    {
                        header ? (
                            <HeaderAside closeAside={()=>setHeader(false)}>
                                {children}
                            </HeaderAside>
                        ) : '' 
                    }
                </div>
            </div>
        </nav>
    </header>
  )
}
