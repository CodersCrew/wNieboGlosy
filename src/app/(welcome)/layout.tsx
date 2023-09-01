import '../globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import fonts from '../fonts';

export const metadata: Metadata = {
  title: 'wNieboGłosy',
  description: 'Fundacja na Rzecz Rozwoju Młodzieży "Młodzi Młodym"'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  );
};

export default RootLayout;
