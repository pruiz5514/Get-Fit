import { Route, Routes } from "react-router-dom"
import Home from "./Public/Home"
import Login from "./Public/Login"
import Register from "./Public/Register"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/iniciar-sesion" element={<Login/>}/>
      <Route path="/registro" element={<Register/>}/>
    </Routes>
  )
}

export default App
