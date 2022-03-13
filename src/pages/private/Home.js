export default function Home() {
  return (
    <div>
      {/* Hero image */}
      <div
        className="relative h-56 lg:h-72 w-full p-6 rounded-3xl shadow-xl flex sm:flex-none justify-center"
        style={{
          "backgroundImage": "url('/img/background.png')",
          "backgroundRepeat": "no-repeat",
          "backgroundSize": "cover",
          "backgroundPosition": "center"
        }}>
        <div className="sm:absolute sm:bottom-6 sm:left-6 z-0 flex-grow-0 self-end">
          <button className="btn btn-primary px-5 sm:px-8 rounded-r-none">
            Primary button
          </button>
          <button className="btn btn-secondary px-5 sm:px-8 rounded-l-none">
            Secondary button
          </button>
        </div>
      </div>
      {/* <p className="mt-16 text">We are here mom</p> */}
    </div>
  )
}
