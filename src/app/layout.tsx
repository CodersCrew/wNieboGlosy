import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'wNieboGłosy',
  description: 'Strona została przeniesiona na wnieboglosy.com'
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pl-PL">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
