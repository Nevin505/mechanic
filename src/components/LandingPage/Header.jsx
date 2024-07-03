import {  useState } from "react";

import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../utils/LandinPageContents";

import Button from "../Button";

import logo from "../../assets/logo/logo.png";
import hamburger from "../../assets/icon/icons8-hamburger-menu.svg";
import closeButton from "../../assets/icon/icons8-close.svg"
import Login from "../login/Login";
import Portal from "../Portal";


const Header = () => {
  
  const [isSmallScreenNavbarVisible, setSmallScreenNavbarVisible] =
    useState(false);

    const [showLoginForm, setShowLoginForm] = useState(false);


    const loginDisplayHandler=()=>{
      console.log(showLoginForm)
      setShowLoginForm(true)
    }

    const hideLoginFormHandler=()=>{
      setShowLoginForm(false)
    }

  return (
    <header className="max-container  bg-white w-full">
      <nav className="flex justify-between w-full px-4 items-center ">
        {
          !isSmallScreenNavbarVisible ? (
            <>
              <img src={logo} alt="" className="w-20 rounded-full"  loading='lazy' />
              <ul className="flex justify-around items-center flex-1 max-lg:hidden">
                {NAV_LINKS.map((navlink) => {
                  return (
                    <NavLink key={navlink.href} id={navlink.href}>
                      {navlink.label}
                    </NavLink>
                  );
                })}
              </ul>
              <div>
                <Button onClick={loginDisplayHandler}>Book An Appointment</Button>
              </div>
              <div
                className="hidden max-lg:block"
                onClick={() => setSmallScreenNavbarVisible(true)}
              >
                <img src={hamburger} alt="hamburger-menu"  loading='lazy' />
              </div>
            </>
          ) : (
            <>
              <ul className="flex  flex-col gap-4 justify-around items-center flex-1 py-4">
                {NAV_LINKS.map((navlink) => {
                  return (
                    <NavLink key={navlink.href} id={navlink.href}>
                      {navlink.label}
                    </NavLink>
                  );
                })}
              </ul>
              <div onClick={() => setSmallScreenNavbarVisible(false)}>
                <img src={closeButton} alt="close button"   loading='lazy'/>
              </div>
            </>
          )
        }
      </nav>
  { showLoginForm &&  <Portal><Login  onClick={hideLoginFormHandler}/></Portal> }
    </header>
  );
};

export default Header;
//  createPortal(<Login  onClick={hideLoginFormHandler}/> , document.getElementById("modal"))