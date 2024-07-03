import { Route, Routes } from "react-router-dom"
import LandinPage from "./pages/LandinPage"
import Register from "./pages/Register"
import UserLandingPage from "./pages/User/UserLandingPage"
import AdminLandingPage from "./pages/admin/AdminLandingPage"
import AddTechinican from "./pages/admin/AddTechinican"
import AssiginTask from "./pages/admin/AssiginTask"

function App() {

  //  createBrowserRouter([])

  return (
    <>
    <Routes>
        <Route path="/" element={<LandinPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user"  element={<UserLandingPage/>} />
        <Route path="/admin"   element={<AdminLandingPage />} />
        <Route path="/add-techinican"   element={<AddTechinican />} />
        <Route path="/assigin-task"   element={<AssiginTask />} />
    </Routes>
   </>
  )
}

export default App
