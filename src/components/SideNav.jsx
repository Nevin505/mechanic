import { useState } from "react";


import closeButton from "../assets/icon/icons8-close.svg";
import hamburger from "../assets/icon/icons8-hamburger-menu.svg";



const SideNav = ({children}) => {
  const [isSideNavVisible, setSideNavVisible] = useState(false);
  function closeSideNavBar() {
    setSideNavVisible(false);
  }

  return (
    <>
      {!isSideNavVisible ? (
        <button
          className="cursor-pointer p-2 fixed top-0 left-0"
          onClick={() => setSideNavVisible(true)}
        >
          <img src={hamburger} alt="hamBurger" />
        </button>
      ) : (
        <aside className="fixed bg-slate-600  top-0 left-0  
         z-20  w-screen opacity-85 h-screen">
          <div className="flex flex-col justify-between gap-8  w-80 bg-black  px-8 py-4 h-screen">
            {children}
          </div>
          <div className="fixed top-0  cursor-pointer right-2" onClick={closeSideNavBar}>
            <img src={closeButton} alt="closeButtton" width={48} />
          </div>
        </aside>
      )}
    </>
  );
};

export default SideNav;
