import { useMemo } from 'react';

export const useColorByStatus = (showStatus, value) => {
  const color = useMemo(() => {
    if (showStatus) {
      if (value[0] === '+') {
        return 'text-green-600';
      }
      if (value[0] === '-') {
        return 'text-red-600';
      }
      return 'text-white';
    }
    return 'text-white';
  }, [showStatus, value]);

  return color;
};
