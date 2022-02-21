import { useState } from 'react';

export default function useValue(initialValue, handleFunction) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target ? e.target.value : e);
    handleFunction(e.target ? e.target.value : e);
  };

  return {
    value,
    reset: () => setValue(initialValue),
    onChange,
  };
}
