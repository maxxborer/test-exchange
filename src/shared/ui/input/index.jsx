import React from 'react';
import { useChange } from './model';

export function Input({ className, onChange: onChangeProp }) {
  const { onChange } = useChange(onChangeProp);

  return (
    <input className={`m-0 h-6 w-full p-2 text-sm text-white border border-solid border-gray-500 rounded bg-gray-900 ${className}`} onChange={onChange} />
  );
}
