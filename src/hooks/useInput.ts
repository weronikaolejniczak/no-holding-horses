import { ChangeEventHandler, useState } from 'react';

type UseInputReturnType = [
  string,
  ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
  (value: string) => void,
];

export const useInput = (initialValue: string): UseInputReturnType => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => setValue(event.target.value);

  return [value, handleOnChange, setValue];
};
