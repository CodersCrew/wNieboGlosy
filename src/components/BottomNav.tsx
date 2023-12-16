'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const BottomNav = () => {
  const pathname = usePathname();

  const isHome = pathname.includes('/o-nas');
  const isMusicians = pathname.includes('/muzycy');
  const isGallery = pathname.includes('/galeria');
  const isJoin = pathname.includes('/dolacz');
  const isSupport = pathname.includes('/wsparcie');
  const isOpinions = pathname.includes('/swiadectwa');

  return (
    <div className="fixed bottom-0 flex w-full justify-center gap-5 border-t border-primary bg-white py-2 text-xs max-[420px]:gap-2 0.5xl:hidden">
      <Link
        className={twMerge(
          'flex flex-col items-center justify-center',
          isHome && 'underline'
        )}
        href="/o-nas"
      >
        <Image alt="O nas" height={24} src="/icons/users.svg" width={24} />
        <p>O nas</p>
      </Link>
      <Link
        className={twMerge(
          'flex flex-col items-center justify-center',
          isMusicians && 'underline'
        )}
        href="/muzycy"
      >
        <Image alt="Muzycy" height={24} src="/icons/music.svg" width={24} />
        <p>Muzycy</p>
      </Link>
      <Link
        className={twMerge(
          'flex flex-col items-center justify-center',
          isGallery && 'underline'
        )}
        href="/galeria"
      >
        <Image alt="Galeria" height={24} src="/icons/imagen.svg" width={24} />
        <p>Galeria</p>
      </Link>
      <Link
        className={twMerge(
          'flex flex-col items-center justify-center',
          isJoin && 'underline'
        )}
        href="/dolacz"
      >
        <Image alt="Dołącz" height={24} src="/icons/check.svg" width={24} />
        <p>Dołącz</p>
      </Link>
      <Link
        className={twMerge(
          'flex flex-col items-center justify-center',
          isSupport && 'underline'
        )}
        href="/wsparcie"
      >
        <Image
          alt="Wesprzyj nas"
          height={24}
          src="/icons/money.svg"
          width={24}
        />
        <p>Wesprzyj nas</p>
      </Link>
      <Link
        className={twMerge(
          'flex flex-col items-center justify-center',
          isOpinions && 'underline'
        )}
        href="/swiadectwa"
      >
        <Image
          alt="Świadectwa"
          height={24}
          src="/icons/opinions.svg"
          width={24}
        />
        <p>Świadectwa</p>
      </Link>
    </div>
  );
};

export default BottomNav;
