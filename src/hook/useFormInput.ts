import { useState } from 'react';

export const useFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return [value, handleChange] as const;
};
