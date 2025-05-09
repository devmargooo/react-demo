import React, { useRef, useImperativeHandle, useState } from 'react';

interface InputElement {
  focusInput: () => void;
  getValue: () => string | undefined;
}

const ChildComponent = ({
  ref,
}: {
  ref: React.RefObject<InputElement | null>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef?.current?.focus();
    },
    getValue: () => {
      return inputRef?.current?.value;
    },
  }));

  return (
    <div>
      <input type='text' ref={inputRef} placeholder='Введите текст' />
    </div>
  );
};

export default ChildComponent;

export const UseImperativeHandle = () => {
  const childRef = useRef<InputElement | null>(null);
  const [value, setValue] = useState<string | undefined>();

  const handleFocusClick = () => {
    childRef.current?.focusInput(); // Фокусируем инпут в дочернем компоненте
  };

  const handleGetValueClick = () => {
    const value = childRef.current?.getValue(); // Получаем значение инпута
    setValue(value);
  };

  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <ChildComponent ref={childRef} />
      <button onClick={handleFocusClick}>Фокус на инпут</button>
      <button onClick={handleGetValueClick}>Получить значение</button>
      {value && <p>Значение: {value}</p>}
    </div>
  );
};
