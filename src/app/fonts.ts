import { Cinzel, Raleway } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel'
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
});

const fonts = `${cinzel.variable} ${raleway.variable}`;

export default fonts;
