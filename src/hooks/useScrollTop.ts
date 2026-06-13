import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** 路由切换时自动滚动到顶部 */
export function useScrollTop(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
}
