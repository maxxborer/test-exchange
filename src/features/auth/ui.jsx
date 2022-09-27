import React from 'react';

export function Auth({ className }) {
  return (
    <div className={`inline-flex ${className}`}>
      <a
        href="/"
        className="font-semibold block items-center text-center text-blue-500 text-xs h-6 mx-2 px-4 border-blue-500 border rounded"
        style={{
          lineHeight: 1.7,
        }}
      >
        Log in
      </a>
      <a
        href="/"
        className="font-semibold block items-center text-center text-white bg-blue-500 text-xs h-6 mx-2 px-4 border-blue-500 border rounded"
        style={{
          lineHeight: 1.7,
        }}
      >
        Register
      </a>
    </div>
  );
}
