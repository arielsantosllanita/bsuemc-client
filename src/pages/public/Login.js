import { useEffect } from "react";
import TopNav from "@components/TopNav";
import { Link, Redirect } from 'react-router-dom';
import { RESET, DASHBOARD } from '@constants/routes';
import useSubmitForm from "@hooks/useSubmitForm";
import Alert from "@components/Alert";

export default function Login() {
  const [formState, submitHandler] = useSubmitForm("/auth", "POST");

  // Change page title after component mounts
  useEffect(() => {
    document.title = "BSU EMC | Login";
    return () => { document.title = "BSU EMC" }
  }, [])

  // If user submits right credentials redirect to dashboard
  if (formState.response?.status === 200) {
    return <Redirect to={DASHBOARD} />
  }

  return (
    <div className="h-screen overflow-y-auto">
      <TopNav />
      <main className="w-2/3 sm:w-1/2 md:w-3/12 p-6
       mx-auto mt-24 dark:bg-gray-600 shadow-md rounded-lg">
        <Alert
          show={formState.failure ? true : false}
          type='danger'
          title='Oops!'
          content={formState.failure?.data.message}
        />

        <form onSubmit={submitHandler}>
          <div className="w-full flex flex-col gap-y-2 mb-4">
            <label htmlFor="email" className="text">Email</label>
            <input
              className="input"
              type="text" name="email" id="email" autoComplete="username"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-y-2 mb-5">
            <label htmlFor="password" className="text">Password</label>
            <small className="text-right cursor-pointer text-blue-600 dark:text-blue-500">
              <Link to={RESET}>
                Forgot password?
              </Link>
            </small>
            <input
              className="col-span-2 input"
              type="password" name="password" id="password"
            />
          </div>
          <button className="btn btn-primary w-full">
            {formState.loading ? "Loading..." : "Login"}
          </button>
        </form>

      </main>
    </div>
  )
}
