import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import fonts from './fonts';

export const metadata: Metadata = {
  title: 'wNieboGłosy',
  description: 'Fundacja na Rzecz Rozwoju Młodzieży "Młodzi Młodym"'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pl-PL">
      <body className={fonts}>{children}</body>
      <SpeedInsights />
    </html>
  );
};

export default RootLayout;
