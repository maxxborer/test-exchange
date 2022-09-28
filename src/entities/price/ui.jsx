import React from 'react';
import { Button } from 'shared/ui/button';
import { numbers } from 'shared/lib/format';

export function Price({ value, currency, currencySymbol }) {
  const price = numbers.formatPrice(value);

  return (
    <p className="text-white text-base font-bold mr-4">
      <span className="hidden md:inline">{currencySymbol}</span>
      <Button className="inline md:hidden text-gray-400 text-xs mr-1" view="blank">{currency}</Button>
      <span className="inline text-xs md:text-base">{price}</span>
    </p>
  );
}
