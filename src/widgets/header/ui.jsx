import React, { useMemo } from 'react';
import { Logo } from 'shared/ui/logo';
import { Menu } from 'shared/ui/menu';
import { SelectCurrency } from 'features/select-currency';
import { Settings } from 'features/settings';
import { Auth } from 'features/auth';
import { Price } from 'entities/price';
import { Changes } from 'entities/сhanges';
import { numbers } from 'shared/lib/format';

const cryptocurrencyCode = 'BTC';

export function Header() {
  const percent24 = useMemo(() => numbers.formatPercent(2.43), []);
  const high24 = useMemo(() => numbers.formatPrice(20381), []);
  const low24 = useMemo(() => numbers.formatPrice(18935), []);
  const volumet24 = useMemo(() => `${numbers.formatCurrency(3714.23)} ${cryptocurrencyCode}`, []);

  return (
    <header className="sm:h-12 h-10 bg-gray-900 inline-flex w-full px-4 sm:px-3 justify-between">
      <div className="inline-flex items-center">
        <Logo />
        <SelectCurrency />
        <Price
          value={19926}
          currency="USD"
          currencySymbol="$"
        />
        <div className="items-center hidden sm:inline-flex">
          <Changes
            title="24h Change"
            value={percent24}
            showStatus
          />
          <Changes
            title="24h High"
            value={high24}
          />
          <Changes
            title="24h Low"
            value={low24}
          />
          <Changes
            title="24h Volume"
            value={volumet24}
          />
        </div>
      </div>
      <div className="inline-flex items-center">
        <Auth className="hidden sm:inline-flex" />
        <Settings className="hidden sm:inline-flex" />
        <Menu className="sm:hidden block w-5 h-5" />
      </div>
    </header>
  );
}
