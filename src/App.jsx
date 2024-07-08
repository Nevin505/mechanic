import { Route, Routes } from "react-router-dom"
import LandinPage from "./pages/LandinPage"
import Register from "./pages/Register"
import UserLandingPage from "./pages/User/UserLandingPage"
import AdminLandingPage from "./pages/admin/AdminLandingPage"
import AddTechinican from "./pages/admin/AddTechinican"
import AssiginTask from "./pages/admin/AssiginTask"
import ServiceHistory from "./pages/User/ServiceHistory"
import CustomerSupport from "./pages/User/CustomerSupport"
import Invoice from "./pages/User/Invoice"
import Report from "./pages/admin/Report"

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<LandinPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user"  element={<UserLandingPage/>} />
        <Route path="/admin"   element={<AdminLandingPage />} />
        <Route path="/add-techinican"   element={<AddTechinican />} />
        <Route path="/assigin-task"   element={<AssiginTask />} />
        <Route path="/service-history"   element={< ServiceHistory />} />
        <Route path="/customer-support"   element={<CustomerSupport/>} />
        <Route path="/invoice"   element={<Invoice/>} />
        <Route path="/report"   element={<Report/>} />
    </Routes>
   </>
  )
}

export default App
