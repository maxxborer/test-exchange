import React from 'react';

export function Button({ onClick, className, children }) {
  return (
    <button className={`pointer ${className}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
