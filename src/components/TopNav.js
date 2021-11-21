import { MdDarkMode, MdLightMode, MdMenu, MdHome, MdLogin, MdAppRegistration, MdClose } from 'react-icons/md';
import { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as ROUTES from "@constants/routes";
import useDarkMode from "@hooks/useDarkMode";
import useToggler from '@hooks/useToggler';

export default function TopNav() {
  const location = useLocation();
  const [darktheme, setDarkTheme] = useDarkMode();
  const themeHandler = () => setDarkTheme(!darktheme);
  const [scrollDown, setScrollDown] = useState(false);
  const [onLandingPage, setOnLandingPage] = useState(undefined);
  const [sideNavRef, openMenu, setOpenMenu] = useToggler();

  // This component's appearance and behaviour will change based on url's pathname
  useLayoutEffect(() => {
    // Check if user scrolls 10px down
    const scrollListener = () => (window.scrollY > 10) ? setScrollDown(true) : setScrollDown(false);
    // Check if this component is on landing page or not
    if (location.pathname === "/") {
      window.addEventListener("scroll", scrollListener);
      setOnLandingPage(true);
    } else {
      window.removeEventListener("scroll", scrollListener);
      setOnLandingPage(false);
    }
    return () => { window.removeEventListener("scroll", scrollListener) }
  }, [location.pathname])

  return (
    <nav
      className={`w-full sticky top-0 h-12 z-10 theme-transition
       ${((onLandingPage && scrollDown) || (!onLandingPage) || (openMenu))
          ? "bg-gray-100 dark:bg-gray-600 shadow-md"
          : ((onLandingPage && !scrollDown)) && "bg-transparent"
        }`}
    >
      <div className="container m-auto px-7 md:px-16">
        <div className="grid grid-cols-2 py-2">
          <div className="flex flex-grow-0">
            <Link to={ROUTES.LANDING_PAGE}>
              <div className="flex flex-row gap-x-2 md:gap-x-4">
                <img src="/img/brand_logo_35x35.png" className="w-8" alt="Brand logo" />
                <h2 className="font-medium font-sans self-center
                text-black dark:text-white">
                  BSU EMC
                </h2>
              </div>
            </Link>
          </div>

          <ul className="flex flex-row self-center gap-x-3 md:gap-x-9 justify-end">
            <li className="cursor-pointer flex self-center" onClick={themeHandler}>
              {darktheme ? <MdDarkMode className="w-8 h-5 fill-current text-white" />
                : <MdLightMode className="w-8 h-5" />}
            </li>
            <li className="md:hidden cursor-pointer flex self-center" onClick={setOpenMenu}>
              {openMenu ? <MdClose className="w-8 h-6 fill-current dark:text-white" />
                : <MdMenu className="w-8 h-6 fill-current dark:text-white" />}
            </li>
            <li className="hidden md:block dark:text-white">
              <Link to={ROUTES.LANDING_PAGE}>Home</Link>
            </li>
            <li className="hidden md:block dark:text-white">
              <Link to={ROUTES.LOGIN}>Login</Link>
            </li>
            <li className="hidden md:block dark:text-white">
              <Link to={ROUTES.SIGN_UP}>Sign up</Link>
            </li>
          </ul>

        </div>
      </div>
      {openMenu && <SideNav navRef={sideNavRef} />}
    </nav>
  )
}

const SideNav = ({ navRef }) => {
  return (
    <motion.div
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      ref={navRef}
      className="w-64 fixed left-0 top-12
       text-left z-10 bg-gray-200 dark:bg-gray-700 shadow-lg"
    >

      <ul style={{ height: 'calc(100vh - 48px)' }}
        className="pt-5 pl-5 bg-gray-100 dark:bg-gray-600"
      >
        <li className="dark:text-white pb-2 flex flex-row gap-x-4">
          <MdHome className="self-center" />
          <Link to={ROUTES.LANDING_PAGE}>Home</Link>
        </li>
        <li className="dark:text-white pb-2 flex flex-row gap-x-4">
          <MdLogin className="self-center" />
          <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li className="dark:text-white flex flex-row gap-x-4">
          <MdAppRegistration className="self-center" />
          <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        </li>
      </ul>
    </motion.div>
  )
}
