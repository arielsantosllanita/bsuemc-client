import { useState } from "react"

/**
 * Determine if capslock is enabled
 */
export default function useCapsLock() {
  const [isCapsLock, setIsCapsLock] = useState(false);
  const keyUpListener = (event) => {
    if (event.getModifierState("CapsLock")) {
      setIsCapsLock(true);
    } else {
      setIsCapsLock(false);
    }
  }
  return [isCapsLock, keyUpListener]
}
