import React from 'react';
import { getButtonStyle } from './utils';

export function Button({
  onClick, className, componentTag, children, view = 'primary', ...props
}) {
  const viewClassName = getButtonStyle(view);
  const Tag = componentTag || 'button';
  const type = Tag === 'button' ? 'button' : undefined;
  const notBlank = view !== 'blank';
  const minWidthForButton = notBlank ? 'min-w-[5rem]' : 'min-w-0';

  return (
    <Tag
      className={`pointer ${viewClassName} ${minWidthForButton} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  );
}
