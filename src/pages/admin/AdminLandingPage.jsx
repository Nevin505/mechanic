import { Link } from "react-router-dom";
import Button from "../../components/Button";
import SideNav from "../../components/SideNav"
import { ADMIN_PAGE_SIDEBAR } from "../../utils/AdminPageContent";

const AdminLandingPage = () => {
  return (
    <div className="max-container ">
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
        
    </div>
  )
}

export default AdminLandingPage
