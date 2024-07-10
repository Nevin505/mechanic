import { useState } from "react";

import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../utils/LandinPageContents";

import Button from "../common/Button";
import Portal from "../common/Portal";

import logo from "../../assets/logo/logo.png";
import hamburger from "../../assets/icon/icons8-hamburger-menu.svg";
import closeButton from "../../assets/icon/icons8-close.svg";
import Login from "../login/Login";

const Header = () => {
  const [isSmallScreenNavbarVisible, setSmallScreenNavbarVisible] =
    useState(false);

  const [showLoginForm, setShowLoginForm] = useState(false);

  const loginDisplayHandler = () => {
    console.log(showLoginForm);
    setShowLoginForm(true);
  };

  const hideLoginFormHandler = () => {
    setShowLoginForm(false);
  };

  return (
    <header className="max-container  bg-white w-full ">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-20  rounded-full" loading="lazy" />

        <nav
          className={`lg:flex  items-center lg:px-4   ${
            isSmallScreenNavbarVisible ? "flex" : "hidden"
          } max-lg:fixed  z-20 bg-white  w-full top-20`}
        >
          <ul className="flex justify-around items-center gap-2  flex-1 max-lg:flex-col">
            {NAV_LINKS.map((navlink) => {
              return (
                <li className="px-4 " key={navlink.href} id={navlink.href}>
                  {navlink.label}
                </li>
              );
            })}
            <Button onClick={loginDisplayHandler}>Book An Appointment</Button>
          </ul>
        </nav>
        {!isSmallScreenNavbarVisible ? (
          <div
            className="hidden max-lg:block max-lg:pr-4 ml-auto  "
            onClick={() => setSmallScreenNavbarVisible(true)}
          >
            <img src={hamburger} alt="hamburger-menu" loading="lazy" />
          </div>
        ) : (
          <div
            className="ml-auto hidden max-lg:block"
            onClick={() => setSmallScreenNavbarVisible(false)}
          >
            <img src={closeButton} alt="close button" loading="lazy" />
          </div>
        )}
      </div>
      {showLoginForm && (
        <Portal>
          <Login onClick={hideLoginFormHandler} />
        </Portal>
      )}
    </header>
  );
};

export default Header;
//  createPortal(<Login  onClick={hideLoginFormHandler}/> , document.getElementById("modal"))
