import { MdDarkMode, MdLightMode, MdMenu, MdClose, MdSettings, MdLogout } from 'react-icons/md';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DASHBOARD_SETTINGS, LANDING_PAGE } from '@constants/routes';
import useToggler from '@hooks/useToggler';
import useDarkMode from '@hooks/useDarkMode';
import { signOutUser } from '@actions';

export default function Header({ openMenu, setOpenMenu }) {
  const user = useSelector(state => state.user);
  const [darkTheme, setTheme] = useDarkMode();
  const themeHandler = () => setTheme(!darkTheme);
  const [drpDownRef, showDropdown, dropdownToggler] = useToggler();

  return (
    <>
      <header
        // ! Be careful when changing the height of this component
        // The height of this component affects the height of SideNav
        className="h-14 w-full sticky top-0 shadow-md z-50
     bg-gray-100 dark:bg-gray-600 flex justify-between lg:justify-end px-7"
      >
        {/* Hamburger menu */}
        <button
          onClick={setOpenMenu}
          className="lg:hidden cursor-pointer flex self-center"
        >
          {openMenu ? <MdClose className="w-8 h-6 fill-current dark:text-white" />
            : <MdMenu className="w-8 h-6 fill-current dark:text-white" />}
        </button>

        <ul className="flex flex-row gap-x-3">
          {/* Theme icon */}
          <li
            onClick={themeHandler}
            className="cursor-pointer flex self-center"
          >
            <button>
              {darkTheme ? <MdDarkMode className="w-8 h-5 fill-current text-white" />
                : <MdLightMode className="w-8 h-5" />}
            </button>
          </li>

          {/* Avatar */}
          <li
            onClick={dropdownToggler}
            className="self-center"
          >
            <img
              // src={user.profilePhoto}
              src='/img/avatar.png'
              alt="Avatar"
              className="w-8 h-8 transform-none rounded-full"
            />
          </li>
        </ul>
      </header>
      {showDropdown && <Dropdown divRef={drpDownRef} />}
    </>
  )
}

function Dropdown({ divRef }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const signOut = () => {
    dispatch(signOutUser());
    if (!user) {
      console.log("signout success", user);
      return <Redirect to={LANDING_PAGE} />
    } else {
      console.log("signout", user);
    }
  }

  return (
    <div
      ref={divRef}
      className="w-52 fixed right-5 rounded-lg shadow-lg z-50 bg-gray-50 dark:bg-gray-400 px-4 py-6"
    >

      <ul className="flex flex-col gap-y-3">
        <li className='text'>
          <Link to={DASHBOARD_SETTINGS} className="flex flex-row items-center">
            <MdSettings className="w-8 h-5 mr-2 fill-current dark:text-white inline-block" />
            Profile Settings
          </Link>
        </li>
        <li
          onClick={signOut}
          className="flex flex-row items-center cursor-pointer text"
        >
          <MdLogout className="w-8 h-5 mr-2 fill-current dark:text-white inline-block" />
          Sign out
        </li>
      </ul>

    </div>
  )
}