import { useMemo } from 'react';

import { UseCurrencyProps } from '#types/props/useCurrency.types';

enum CURRENCY {
  UNKNOWN = '?',
  USD = '$'
}

export const useCurrency = ({ acronym }: UseCurrencyProps) => {
  const currency = useMemo(() => {
    switch (acronym) {
      case 'USD':
        return CURRENCY[acronym];
      default:
        return CURRENCY.UNKNOWN;
    }
  }, [acronym]);

  return {
    currency
  };
};
