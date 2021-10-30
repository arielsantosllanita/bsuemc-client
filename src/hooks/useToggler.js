import { useState, useRef, useEffect } from "react";

/**
 * Useful for toggling modals or any partial elements
 */
export default function useToggler(initialValue = false) {
  const divRef = useRef(null);
  const [visible, setVisible] = useState(initialValue);
  const stateHandler = () => setVisible(oldState => !oldState);
  
  useEffect(() => {
    const clickListener = (event) => {
      // If the menu/modal is open and the user clicks outside the menu/modal, close it HUHU
      if (visible && divRef.current && !divRef.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", clickListener);
    return () => {
      document.removeEventListener("mousedown", clickListener);
    }
  }, [visible])

  return [divRef, visible, stateHandler]
}
