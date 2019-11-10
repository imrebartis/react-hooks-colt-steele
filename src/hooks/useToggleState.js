import { useState } from "react";

function useToggleState(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // return piece of state & a function to toggle it
  return [state, toggle];
}

export default useToggleState;
