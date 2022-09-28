import React from 'react';
import { Button } from 'shared/ui/button';
import { ReactComponent as SettingsIcon } from 'assets/settings.svg';

export function Settings({ className }) {
  return (
    <Button view="blank" className={`text-gray-300 hover:text-gray-50 pointer h-5 w-5 ml-2 ${className}`}>
      <SettingsIcon />
    </Button>
  );
}
