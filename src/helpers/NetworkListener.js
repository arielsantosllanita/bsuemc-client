import { useState, useEffect } from "react";

export default function NetworkListener({ children }) {
  const [online, setOnline] = useState(null);

  useEffect(() => {
    const networkListener = (event) => {
      navigator.onLine ? setOnline(true) : setOnline(false);
      console.log("Event:", event.type);
    }

    window.addEventListener("online", networkListener);
    window.addEventListener("offline", networkListener);
    return () => {
      window.removeEventListener("online", networkListener);
      window.removeEventListener("offline", networkListener);
    }
  }, [])

  return (
    <div>
      <p className="text-center">
        Status {online ? "Online" : "Offline"} <br /> <br />
        Type: {typeof online}
      </p>
    </div>
  )
}
