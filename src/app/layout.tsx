'use client';
import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';

import fonts from './fonts';

export const metadata: Metadata = {
  title: 'wNieboGłosy',
  description: 'Fundacja na Rzecz Rozwoju Młodzieży "Młodzi Młodym"'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const welcomePage = '/';

  return (
    <html lang="pl-PL">
      <body className={fonts}>
        {pathname !== welcomePage && <Header />}
        {children}
        {pathname !== welcomePage && <BottomNav />}
      </body>
    </html>
  );
};

export default RootLayout;
