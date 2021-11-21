import TopNav from "@components/TopNav";
import { LOGIN } from "@constants/routes";
import useFetch from "@hooks/useFetch";
import useSubmitForm from "@hooks/useSubmitForm"
import { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ResetVerify() {
  const { url } = useParams();
  // Verify to backend if the url/link came from client's email
  const fetch = useFetch(`/auth/reset/${url}`, "DELETE");

  const [formState, submitHandler] = useSubmitForm("/auth/reset/", "PUT");
  const formRef = useRef(null);
  const [error, setError] = useState({});

  const verifySubmit = (event) => {
    event.preventDefault();
    const correctPassword = () => {
      const password = Array.from(formRef.current).filter(element => {
        return ["password", "retypepassword"].some(id => id === element.id)
      });
      if (password[0].value !== password[1].value) {
        setError({ password: "Password didn't matched!" });
        return false
      }
      return true
    }
    if (correctPassword()) {
      setError({});
      submitHandler(event);
    }
  }

  return fetch.response?.status === 200 ? (
    <div className="h-screen overflow-y-auto">
      <TopNav />
      <main className="w-2/3 sm:w-1/2 md:w-3/12 p-6
       mx-auto mt-24 dark:bg-gray-600 shadow-md rounded-lg">

        {(formState.response?.status === 200)
          ?
          <p className="text text-center">
            {formState.response.data.message} <br />
            <Link to={LOGIN}>
              <span className="text-blue-500 cursor-pointer underline">
                Click here to continue
              </span>
            </Link>
          </p>
          :
          <Form
            verifySubmit={verifySubmit}
            error={error}
            formRef={formRef}
            formState={formState}
          />}

      </main>
    </div>
  ) : (
    <div className="h-screen overflow-y-auto">
      <TopNav />
      <main className={`w-2/3 sm:w-1/2 md:w-3/12 p-6 text-center
       mx-auto mt-24 ${fetch.response ? "bg-green-400" : "bg-red-400"} shadow-md rounded-lg`}>
        <p className="text">
          {fetch.failed && fetch.failed.data.message}
        </p>
      </main>
      {fetch.fetching && <div className="mt-24"><h1 className="text-3xl text-center text">Loading...</h1></div>}
    </div>
  )
}

const Form = ({ verifySubmit, formRef, error, formState }) => {
  return (
    <form onSubmit={verifySubmit} ref={formRef}>
      <div className="flex flex-col gap-y-2 mb-2">
        <label htmlFor="password" className="text">New password</label>
        <input className="input"
          type="password" name="password" id="password" required
        />
      </div>

      <div className="flex flex-col gap-y-2 mb-4">
        <label htmlFor="retypepassword" className="text">Re-type password</label>
        <input className={`input ${error.password ? "border-2 border-red-500 focus:ring-transparent" : ""}`}
          type="password" id="retypepassword" required
        />
        {error.password && <span className="bg-red-400 rounded-md text-xs px-2 py-1 text-center">{error.password}</span>}
      </div>

      <button className="btn btn-primary w-full" disabled={formState.loading}>
        {formState.loading ? "Loading..." : "Change password"}
      </button>
    </form>
  )
}
