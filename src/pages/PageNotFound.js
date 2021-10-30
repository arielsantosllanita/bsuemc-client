import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { LANDING_PAGE } from '@constants/routes';

export default function PageNotFound() {
  useEffect(() => {
    document.title = "BSU EMC | 404"
    return () => { document.title = "BSU EMC" }
  }, [])

  return (
    <div className="text-center mt-48">
      <h1>Page not found page</h1>
      <h3>
        Go to <Link to={LANDING_PAGE}>
          <span className="text-blue-800 underline">home</span>
        </Link>
      </h3>
    </div>
  )
}
