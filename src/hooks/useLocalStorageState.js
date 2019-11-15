import { useState, useEffect } from "react";

function UseLocalStorageState(key, defaultVal) {
  // make piece of state, based on value in localStorage (or default)
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      return defaultVal;
    }
  });
  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default UseLocalStorageState;
