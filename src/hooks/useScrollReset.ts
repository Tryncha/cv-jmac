import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function useScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => scrollTo(0, 0), [pathname]);
}
