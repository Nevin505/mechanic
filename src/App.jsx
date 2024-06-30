import { Route, Routes } from "react-router-dom"
import LandinPage from "./pages/LandinPage"
import Register from "./pages/Register"
import UserlandinPage from "./components/user/UesrlandinPage"

function App() {

  //  createBrowserRouter([])

  return (
    <>
    <Routes>
        <Route path="/" element={<LandinPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user"  element={<UserlandinPage/>} />
    </Routes>
   </>
  )
}

export default App
