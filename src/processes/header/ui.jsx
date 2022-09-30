import React from 'react';
import { SelectCurrency } from 'features/select-currency';
import { Price } from 'entities/price';
import { ChangesBlock } from 'widgets/changes-block';
import { UserMenu } from 'widgets/user-menu';
import { Logo } from 'shared/ui/logo';

export function Header() {
  return (
    <header className="md:h-12 h-10 bg-gray-900 inline-flex w-full px-4 md:px-3 justify-between">
      <div className="inline-flex items-center">
        <Logo />
        <SelectCurrency />
        <Price
          value={19926}
          currency="USD"
          currencySymbol="$"
        />
        <ChangesBlock />
      </div>
      <UserMenu />
    </header>
  );
}
