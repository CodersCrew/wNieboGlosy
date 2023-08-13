'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import Button from './Button';

const Header = () => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isMusicians = pathname === '/muzycy';
  const isGallery = pathname === '/galeria';
  const isJoin = pathname === '/dolacz';
  const isSupport = pathname === '/wsparcie';

  return (
    <div className="fixed top-0 z-40 w-full bg-gradient-to-b from-[#1C2746] to-[#1D2543]/3 px-5">
      <div className="m-auto flex h-18 max-w-[1440px] items-center justify-between lg:h-[101px]">
        <Link className="relative h-10 w-10 lg:h-20 lg:w-20" href="/">
          <Image alt="Logo wNieboGłosów" fill src="/assets/logo.svg" />
        </Link>
        <Button
          className="lg:hidden"
          href="https://zrzutka.pl/wtpwka"
          variant="containedWhite"
        >
          DOŁĄCZ DO ZRZUTKI
        </Button>
        <div className="hidden gap-6 lg:flex">
          <Button
            className={twMerge('lg:p-2', isHome && 'underline')}
            href="/"
            variant="textWhite"
          >
            O nas
          </Button>
          <Button
            className={twMerge('lg:p-2', isMusicians && 'underline')}
            href="/muzycy"
            variant="textWhite"
          >
            Muzycy
          </Button>
          <Button
            className={twMerge('lg:p-2', isGallery && 'underline')}
            href="/galeria"
            variant="textWhite"
          >
            Galeria
          </Button>
          <Button
            className={twMerge('lg:p-2', isJoin && 'underline')}
            href="/dolacz"
            variant="textWhite"
          >
            Dołącz
          </Button>
          <Button
            className={twMerge('lg:p-2', isSupport && 'underline')}
            href="/wsparcie"
            variant="textWhite"
          >
            Wesprzyj nas
          </Button>
          <Button href="https://zrzutka.pl/wtpwka" variant="containedWhite">
            Dołącz do zrzutki
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
