import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import fonts from './fonts';

export const metadata: Metadata = {
  title: 'wNieboGłosy',
  description: 'Stowarzyszenie Centrum Nowej Ewangelizacji DON BOSCO'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pl-PL">
      <body className={fonts}>{children}</body>
    </html>
  );
};

export default RootLayout;
