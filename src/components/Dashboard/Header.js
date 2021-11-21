import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';
import useDarkMode from '@hooks/useDarkMode';
import { useSelector } from 'react-redux';

export default function Header({ openMenu, setOpenMenu }) {
  const user = useSelector(state => state.user);
  const [darkTheme, setTheme] = useDarkMode();
  const themeHandler = () => setTheme(!darkTheme);

  return (
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

      {/* Theme icon and avatar */}
      <ul className="flex flex-row gap-x-3">
        <li
          onClick={themeHandler}
          className="cursor-pointer flex self-center"
        >
          <button>
            {darkTheme ? <MdDarkMode className="w-8 h-5 fill-current text-white" />
              : <MdLightMode className="w-8 h-5" />}
          </button>
        </li>
        <li className="self-center" >
          <img src={user.profilePhoto && user.profilePhoto} alt="Avatar" className="w-8 h-8 transform-none rounded-full" />
        </li>
      </ul>
    </header>
  )
}
