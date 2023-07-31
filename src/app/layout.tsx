import fonts from './fonts';
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'wNieboGłosy',
  description: 'Fundacja na Rzecz Rozwoju Młodzieży "Młodzi Młodym"'
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pl-PL">
    <body className={fonts}>{children}</body>
  </html>
);

export default RootLayout;
