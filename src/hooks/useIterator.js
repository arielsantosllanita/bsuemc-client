import { useState } from "react";

/**
 * This hook will allow you to cycle through any array
 */
export default function useIterator(array = [], initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => {
    if (index === 0) return setIndex(array.length - 1);
    setIndex(index - 1);
  }

  const next = () => {
    if (index === array.length - 1) return setIndex(0);
    setIndex(index + 1);
  }
  
  return [array[index], prev, next]
}
