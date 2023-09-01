import '../globals.css';

import fonts from '../fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  );
};

export default RootLayout;
