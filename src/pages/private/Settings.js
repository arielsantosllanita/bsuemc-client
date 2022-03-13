import { DASHBOARD } from "@constants/routes";
import useCapsLock from "@hooks/useCapsLock";
import useImageUpload from "@hooks/useImageUpload";
import useSubmitForm from "@hooks/useSubmitForm";
import { useRef, forwardRef, useImperativeHandle, useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const childState = useRef(null);
  
  if (childState.current) {
    console.log("form state", childState.current.formState);  
  } else {
    console.log("nope", childState.current);
  }
  
  return (
    <div className="w-3/4 mx-auto">
      <Link to={DASHBOARD}>Back</Link>
      {/* {childState.current.imgUrl &&
        <img src={childState.current.imgUrl}
          alt="Profile preview"
          className="rounded-full h-32 w-32 mx-auto -mt-14"
        />
      } */}

      <Form ref={childState} />
    </div>
  )
}

const Form = forwardRef((props, ref) => {
  const [isCapsLock, capsLockListener] = useCapsLock();
  const [error, setError] = useState({});
  const [profilePhoto, setProfilePhoto] = useState(null);
  const photoHandler = (e) => setProfilePhoto(e.target.files[0]);
  const imgUrl = useImageUpload(profilePhoto);
  const [formState, submitHandler] = useSubmitForm("/profile/settings", "PUT", { profilePhoto: imgUrl });
  const formRef = useRef(null);

  // Allow parent component to have access to local state
  useImperativeHandle(ref, () => ({
    formState: { ...formState },
    imgUrl: imgUrl
  }));

  // Verify inputs before submitting to backend
  const verifyFormSubmit = (event) => {
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

  return (
    <form onSubmit={verifyFormSubmit} ref={formRef}>
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
        <button className="btn btn-primary w-full" disabled={formState.loading}>
          {formState.loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  )
})

const CapsLockBadge = () => {
  return (
    <small className="bg-yellow-300 text-black font-medium px-2 py-1 rounded-md">
      Caps Lock ON
    </small>
  )
}