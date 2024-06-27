import { Route, Routes } from "react-router-dom"
import LandinPage from "./pages/LandinPage"
import Register from "./pages/Register"

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<LandinPage/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
   </>
  )
}

export default App
