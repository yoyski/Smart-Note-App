import { useState, useEffect } from "react";
import { getNote, setNote } from "../lib/localStorage";

export function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getNote(key) ?? initialValue; // this will return base on key e.g note and it will be equal to value here const [value, setValue]
  });

  useEffect(() => {
    setNote(key, value);
  }, [key, value]);

  return [value, setValue];
}
