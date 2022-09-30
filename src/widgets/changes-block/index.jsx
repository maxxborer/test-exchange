import React, { useMemo } from 'react';
import { Changes } from 'entities/сhanges';
import { numbers } from 'shared/lib/format';

const cryptocurrencyCode = 'BTC';

export function ChangesBlock() {
  const percent24 = useMemo(() => numbers.formatPercent(2.43), []);
  const high24 = useMemo(() => numbers.formatPrice(20381), []);
  const low24 = useMemo(() => numbers.formatPrice(18935), []);
  const volumet24 = useMemo(() => `${numbers.formatCurrency(3714.23)} ${cryptocurrencyCode}`, []);

  return (
    <div className="items-center hidden md:inline-flex">
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
  );
}
