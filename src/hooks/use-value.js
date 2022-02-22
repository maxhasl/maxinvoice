import { useState } from 'react';

export default function useValue(initialValue, getValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target ? e.target.value : e);
    getValue(e.target ? e.target.value : e);
  };

  return {
    value,
    reset: () => setValue(initialValue),
    onChange,
  };
}
