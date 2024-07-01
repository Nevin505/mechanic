import { Route, Routes } from "react-router-dom"
import LandinPage from "./pages/LandinPage"
import Register from "./pages/Register"
import UserLandingPage from "./pages/User/UserLandingPage"
import AdminLandingPage from "./pages/admin/AdminLandingPage"

function App() {

  //  createBrowserRouter([])

  return (
    <>
    <Routes>
        <Route path="/" element={<LandinPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user"  element={<UserLandingPage/>} />
        <Route path="/admin"   element={<AdminLandingPage />} />
    </Routes>
   </>
  )
}

export default App
