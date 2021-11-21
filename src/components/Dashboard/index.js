import Header from './Header';
import SideNav from './SideNav';
import useToggler from '@hooks/useToggler';

export default function Index({ children }) {
  const [sideNavRef, openMenu, setOpenMenu] = useToggler();

  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex">

        <aside
          ref={sideNavRef}
          className={`w-64 overflow-y-auto bg-gray-100 dark:bg-gray-600
           fixed lg:sticky left-0 top-14 lg:top-0 lg:h-screen z-50 ${!openMenu ? "hidden lg:block" : ""}`}
          // ! The height of SideNav should be deducted by the height of the Header component (h-14 == 3.5rem)
          style={!openMenu ? {} : { height: 'calc(100% - 3.5rem)' }}
        >
          <SideNav />
        </aside>

        <main className="flex-grow">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div className="px-8 py-9 lg:px-7">
            {children}
          </div>
        </main>

      </div>
    </div>
  )
}
