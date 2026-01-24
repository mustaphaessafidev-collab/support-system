import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login"
import Regester from "./pages/auth/Register"

function App() {


  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} /> 
      <Route path="/regester" element={<Regester/>} /> 
      
    </Routes>
      
    </>
  )
}

export default App
