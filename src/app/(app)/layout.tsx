import type { ReactNode } from 'react';

import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <BottomNav />
    </>
  );
};

export default PagesLayout;
