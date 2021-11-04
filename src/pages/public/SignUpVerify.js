import Spinner from "@components/Spinner";
import useFetch from "@hooks/useFetch";
import { useParams } from "react-router"
import TopNav from '@components/TopNav';

export default function SignUpVerify() {
  const { url } = useParams();
  // Verify to backend if url token is legit
  const {
    fetching,
    response,
    failed
  } = useFetch(`/auth/signup/${url}`, "PUT");

  return !fetching ? (
    <div className="h-screen overflow-y-auto">
      <TopNav />
      <main className={`w-2/3 sm:w-1/2 md:w-3/12 p-6 mx-auto mt-24
       shadow-md ${response ? "bg-green-400" : "bg-red-400"} rounded-lg`}
      >
        {response && <p className="text-center text">
          <strong>TODO: Add additional explanation about what will happen</strong><br /> {response.data.message}
        </p>}
        {failed && <p className="text-center text">{failed.data.message}</p>}
      </main>
    </div>
  ) : (
    <Spinner />
  )
}
