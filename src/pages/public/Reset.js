import Alert from "@components/Alert";
import TopNav from "@components/TopNav";
import useSubmitForm from "@hooks/useSubmitForm";

export default function Reset() {
  const [formState, submitHandler] = useSubmitForm("/auth/reset", "POST");
  const alertProperties = {
    show: formState.toggleAlert,
    type: formState.response ? 'success' : 'danger',
    title: formState.response ? 'Success!' : 'Oops!',
    content: formState.response ? formState.response.data.message : formState.failure?.data.message
  }

  return (
    <div className="h-screen overflow-y-auto">
      <TopNav />
      <main className="w-2/3 sm:w-1/2 md:w-3/12 p-6
       mx-auto mt-24 dark:bg-gray-600 shadow-md rounded-lg">

        <Alert {...alertProperties} />
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-y-2 mb-4">
            <label htmlFor="email" className="text">Email</label>
            <input type="email" name="email" id="email" className="input" required />
            <small className="text -mt-1 text-center font-thin text-xs">
              To help you secure your account, we will send a link to your email to verify this action.
            </small>
          </div>
          <button className="btn btn-primary w-full" disabled={formState.loading}>
            {formState.loading ? "Loading..." : "Submit"}
          </button>
        </form>

      </main>
    </div>
  )
}
