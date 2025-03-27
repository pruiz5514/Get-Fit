import { Route, Routes } from "react-router-dom"
import Home from "./Public/Home"
import Login from "./Public/Login"
import Register from "./Public/Register"
import Dashboard from "./Private/Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import Routines from "./Private/Routines"
import NewRutine from "./Private/NewRoutine"
import RoutineInfo from "./Private/RoutineInfo"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/iniciar-sesion" element={<Login/>}/>
      <Route path="/registro" element={<Register/>}/>
      
      <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/rutinas" element={<Routines/>}/>
        <Route path="/nueva-rutina" element={<NewRutine/>}/>
        <Route path="/rutinas/:id" element={<RoutineInfo/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
