import { useCallback } from 'react';

export const useChange = (callback) => {
  const onChange = useCallback((event) => {
    callback(event);
  }, [callback]);

  return onChange;
};
