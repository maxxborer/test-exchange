import React from 'react';
import { Link } from 'shared/ui/link';

export function Auth({ className }) {
  return (
    <div className={`inline-flex ${className}`}>
      <Link
        href="/"
        view="transparent"
        style={{
          lineHeight: 1.7,
        }}
      >
        Log in
      </Link>
      <Link
        href="/"
        view="primary"
        style={{
          lineHeight: 1.7,
        }}
      >
        Register
      </Link>
    </div>
  );
}
