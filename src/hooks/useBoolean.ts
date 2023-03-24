import { useState } from 'react';

function useBoolean(options?: { defaultValue?: boolean }) {
  const [val, setVal] = useState(options?.defaultValue ?? false);
  function setTrue() {
    setVal(true);
  }
  function setFalse() {
    setVal(false);
  }
  return {
    state: val,
    setTrue,
    setFalse,
  };
}
export default useBoolean;
