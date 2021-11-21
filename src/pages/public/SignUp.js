import React, { useEffect, useRef } from "react";
import TopNav from "@components/TopNav";
import useCapsLock from "@hooks/useCapsLock";
import useImageUpload from "@hooks/useImageUpload";
import { useState } from "react";
import useSubmitForm from "@hooks/useSubmitForm";
import Alert from "@components/Alert";

export default function SignUp() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const formRef = useRef(null);
  const [error, setError] = useState({});
  const imgUrl = useImageUpload(profilePhoto);
  const [formState, submitHandler] = useSubmitForm("/auth/signup", "POST", { profilePhoto: imgUrl });
  const alertProperties = {
    show: formState.toggleAlert,
    type: formState.response ? 'success' : 'danger',
    title: formState.response ? 'Success!' : 'Oops!',
    content: formState.response ? formState.response.data.message : formState.failure?.data.message
  }

  const verifySubmit = (event) => {
    event.preventDefault();
    // Verify if image is less than 15MB and has valid type
    const validImage = () => {
      const validImageType = ["image/jpeg", "image/jpg", "image/png"].some(type => type === profilePhoto.type);
      if (profilePhoto.size > 15000000 || !validImageType) {
        setError({ profilePhoto: "File size should be less than 15MB and a type of png/jpg/jpeg" });
        return false
      }
      return true
    }
    // Verify if password and re-type password inputs are the same
    const correctPassword = () => {
      const password = Array.from(formRef.current).filter(element => {
        const passwordID = ["password", "retypepassword"];
        return passwordID.some(id => id === element.id)
      });
      if (password[0].value !== password[1].value) {
        setError({ password: "Password didn't matched!" });
        return false
      }
      return true
    }
    // Submit the form if it passes the validations
    if (correctPassword() && validImage()) {
      setError({});
      submitHandler(event);
    }
  }

  // Scroll up after the request is done so the user could see the alert message
  useEffect(() => {
    if (formState.toggleAlert) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [formState.toggleAlert])

  // Change page title
  useEffect(() => {
    document.title = "BSU EMC | Sign up";
    return () => { document.title = "BSU EMC" }
  }, [])

  return (
    <>
      <TopNav />
      <div className="h-auto md:h-screen overflow-y-auto pb-6">
        <main className="mt-20 mx-auto w-2/3 sm:w-1/2 md:w-8/12 lg:w-1/2
       p-6 shadow-md rounded-lg dark:bg-gray-600">

          {imgUrl && <img src={imgUrl} className="rounded-full h-32 w-32 mx-auto -mt-14" alt="Profile preview" />}
          <Alert {...alertProperties} />
          <form onSubmit={verifySubmit} ref={formRef}>
            <Inputs
              error={error}
              loading={formState.loading}
              setProfilePhoto={setProfilePhoto}
            />
          </form>

        </main>
      </div>
    </>
  )
}

const Inputs = ({ loading, setProfilePhoto, error }) => {
  const [isCapsLock, capsLockListener] = useCapsLock();
  const photoHandler = (e) => setProfilePhoto(e.target.files[0]);

  return (
    <>
      <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-2">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="firstName" className="text flex-grow-0">First Name</label>
          <input type="text" name="firstName" className="input flex-grow-0" id="firstName" required />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="lastName" className="text flex-grow-0">Last Name</label>
          <input type="text" name="lastName" className="input flex-grow-0" id="lastName" required />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="text flex-grow-0">Email</label>
          <input type="email" name="email" className="input flex-grow-0" id="email" required />
        </div>
      </div>

      <div className="mb-2 grid grid-cols-1 gap-y-2">
        <label htmlFor="address" className="text">Address</label>
        <input type="text" name="address" className="input" placeholder="Street address, City name..." id="address" required />
      </div>

      <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-2">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="birthday" className="text flex-grow-0">Birth date</label>
          <input type="date" name="birthday" className="input flex-grow-0" id="birthday" required />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password" className="text flex-grow-0">
            Password {isCapsLock && <CapsLockBadge />}
          </label>
          <input type="password" name="password" className="input flex-grow-0" id="password" required
            onKeyUp={capsLockListener}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="retypepassword" className="text flex-grow-0">Re-type password</label>
          <input type="password" className={`input flex-grow-0 ${error.password ? "border-solid border-red-500" : ""}`} id="retypepassword" required />
          {error.password && <span className="bg-red-400 rounded-md text-xs px-2 py-1 text-center">{error.password}</span>}
        </div>
      </div>

      <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-2">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="cellNumber" className="text flex-grow-0">Phone number</label>
          <input type="tel" name="cellNumber" className="input flex-grow-0" id="cellNumber" required />
        </div>
        <div className="flex flex-col col-span-2 gap-y-2">
          <label htmlFor="profilePhoto" className="text flex-grow-0">Profile photo</label>
          <input type="file" name="profilePhoto" id="profilePhoto" accept="image/png, image/jpeg, image/jpg" required
            className={`input flex-grow-0 ${error.profilePhoto ? "border-solid border-red-500" : ""}`} onChange={photoHandler}
          />
          {error.profilePhoto && <span className="bg-red-400 rounded-md text-xs px-2 py-1 text-center">{error.profilePhoto}</span>}
        </div>
      </div>

      <div className="w-full md:w-4/12 mx-auto text-center mt-5">
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </>
  )
}

const CapsLockBadge = () => {
  return (
    <small className="bg-yellow-300 text-black font-medium px-2 py-1 rounded-md">
      Caps Lock ON
    </small>
  )
}
