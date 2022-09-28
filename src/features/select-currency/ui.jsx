import React from 'react';
import { Button } from 'shared/ui/button';
import { ReactComponent as DownIcon } from 'assets/down.svg';

export function SelectCurrency() {
  return (
    <Button view="blank" className="inline-flex items-center pointer mt-0.5 md:pr-5 pr-2 select-none text-blue-500 text-sm font-bold">
      BTC / USD
      <DownIcon className="w-3 h-3 mx-0.5" />
    </Button>
  );
}
