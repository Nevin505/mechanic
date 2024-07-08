import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import SideNav from "../../components/common/SideNav"
import { ADMIN_PAGE_SIDEBAR } from "../../utils/AdminPageContent";
import Dashboard from "../../components/admin/Dashboard";

const AdminLandingPage = () => {
  return (
    <div className="max-container flex flex-col items-center bg-gradient-to-r  from-primary-400  max-container to-primary-800">
        <SideNav>
        {ADMIN_PAGE_SIDEBAR.map((sideNav,index) => {
              return (
                <div key={index} className="text-white cursor-pointer p-4 rounded-lg hover:bg-slate-950">
                 <Link to={sideNav.navigate}> {sideNav.label}</Link>
                </div>
              );
            })}
            <div>
              <Button>Logout</Button>
            </div>
        </SideNav>
        <Dashboard/>
        
        
    </div>
  )
}

export default AdminLandingPage
