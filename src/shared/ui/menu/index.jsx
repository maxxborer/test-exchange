import React from 'react';
import { ReactComponent as MenuSvg } from 'assets/menu.svg';
import { Button } from 'shared/ui/button';

export function Menu({ className, onClick }) {
  return (
    <Button className={className} view="blank" onClick={onClick}>
      <MenuSvg
        className="fill-white mr-4 w-5 h-5"
      />
    </Button>
  );
}
