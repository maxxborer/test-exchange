import React from 'react';
import { Settings } from 'features/settings';
import { Auth } from 'features/auth';
import { Menu } from 'shared/ui/menu';

export function UserMenu() {
  return (
    <div className="inline-flex items-center">
      <Auth className="hidden md:inline-flex" />
      <Settings className="hidden md:inline-flex" />
      <Menu className="md:hidden block w-5 h-5" />
    </div>
  );
}
