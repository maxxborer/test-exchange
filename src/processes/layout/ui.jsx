import React from 'react';
import { Header } from 'processes/header';

export function Layout({ children, ...props }) {
  return (
    <>
      <Header />
      <main {...props}>
        {children}
      </main>
    </>
  );
}
