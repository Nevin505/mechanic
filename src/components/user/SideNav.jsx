import { useState } from "react";
import closeButton from "../../assets/icon/icons8-close.svg";

import hamburger from "../../assets/icon/icons8-hamburger-menu.svg";

import { USER_SIDE_NAV } from "../../utils/UserPageContent";
import Button from "../Button";

const SideNav = () => {
  const [isSideNavVisible, setSideNavVisible] = useState(false);
  function closeSideNavBar() {
    setSideNavVisible(false);
  }

  return (
    <>
      {!isSideNavVisible ? (
        <button
          className="cursor-pointer p-2 fixed"
          onClick={() => setSideNavVisible(true)}
        >
          <img src={hamburger} alt="hamBurger" />
        </button>
      ) : (
        <aside className="fixed bg-slate-600  z-20 h-screen">
          <div className="flex flex-col justify-between gap-8 bg-black  px-8 py-4 h-screen">
            {USER_SIDE_NAV.map((sideNav,index) => {
              return (
                <div key={index} className="text-white cursor-pointer hover:bg-slate-950">
                  {sideNav}
                </div>
              );
            })}
            <div>
              <Button>Logout</Button>
            </div>
          </div>
          <div className="fixed top-0  right-2" onClick={closeSideNavBar}>
            <img src={closeButton} alt="closeButtton" width={48} />
          </div>
        </aside>
      )}
    </>
  );
};

export default SideNav;
