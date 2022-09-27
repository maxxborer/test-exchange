import React from 'react';
import { ReactComponent as LogoSvg } from 'assets/logo.svg';
import { ReactComponent as LogoSmallSvg } from 'assets/logo-small.svg';
import { paths } from 'pages/_router';

export function Logo({ className }) {
  return (
    <a href={paths.MAIN} className={className}>
      <LogoSvg
        className="fill-white mr-4 hidden sm:block"
      />
      <div className="mr-4 sm:hidden block w-14">
        <LogoSmallSvg className="fill-white h-6" />
      </div>
    </a>
  );
}
