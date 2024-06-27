import { Route, Routes } from "react-router-dom"
import LandinPage from "./pages/LandinPage"

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<LandinPage/>}/>
    </Routes>
   </>
  )
}

export default App
