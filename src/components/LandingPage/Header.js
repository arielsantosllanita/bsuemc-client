import { Link } from 'react-router-dom';
import WaveDown from '../WaveDown';
import * as ROUTES from '@constants/routes';

export default function Header() {
  return (
    <header className="gradient -mt-12 pt-16 md:pt-12">
      <div className="w-11/12 md:w-10/12 md:flex mx-auto gap-x-3">
        <div className="w-full md:w-5/12 my-auto text-center md:text-left">
          <h1 className="font-sans font-thin antialiased text-gray-50 text-5xl">
            Through the years
          </h1>
          <h2 className="font-light text-gray-50 mt-4">
            Uplifting the standard of living and quality of life for everyone
          </h2>
          <Link to={ROUTES.LOGIN}>
            <button className="py-3 px-11 mt-9 bg-gray-100 rounded-3xl shadow-xl 
            hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75">
              <span className="text-black font-normal text-lg">
                Get Started
              </span>
            </button>
          </Link>
        </div>
        <div className="w-full md:w-7/12">
          <img src="/img/hero_image.svg" alt="Hero" />
        </div>
      </div>
      <WaveDown
        classes="-mt-4 md:-mt-14 lg:-mt-16 transform-none cursor-auto"
      />
    </header>
  )
}