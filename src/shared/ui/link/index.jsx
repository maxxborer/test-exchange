import React from 'react';
import { Button } from 'shared/ui/button';

export function Link({
  onClick, className, componentTag, children, href, ...props
}) {
  return (
    <Button className={className} view="blank" componentTag="a" href={href} {...props}>
      {children}
    </Button>
  );
}
