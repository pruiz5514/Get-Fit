import { Route, Routes } from "react-router-dom"
import Home from "./Public/Home"
import Login from "./Public/Login"
import Register from "./Public/Register"
import Dashboard from "./Private/Dashboard"
import ProtectedRoute from "./ProtectedRoute"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/iniciar-sesion" element={<Login/>}/>
      <Route path="/registro" element={<Register/>}/>
      
      <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
