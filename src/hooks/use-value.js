import { useState } from 'react';

export default function useValue({ initialValue, handleTitle }) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target ? e.target.value : e);
    handleTitle(e.target ? e.target.value : e);
  };

  return {
    value,
    reset: () => setValue(initialValue),
    onChange,
  };
}
