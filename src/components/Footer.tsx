import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

import fbIcon from '@/public/icons/fb.svg';
import igIcon from '@/public/icons/ig.svg';
import ytIcon from '@/public/icons/yt.svg';

const Footer = () => (
  <div className="relative mb-14 h-[446px] lg:mb-0 lg:h-[338px]">
    <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-gradient-bg-bottom px-5 py-10 text-sm lg:px-30 lg:text-base">
      <div className="m-auto flex max-w-[1440px] flex-col border-arrow lg:flex-row lg:justify-between lg:border-t">
        <div className="flex flex-col items-center border-y border-arrow py-6 lg:items-start lg:border-none">
          <p className="mb-2.5 font-semibold">wNieboGłosy</p>
          <p className="mb-6">wnieboglosy.wroclaw@gmail.com</p>
          <div className="mb-2 flex gap-4">
            <Link
              href="https://www.facebook.com/wNieboGlosyUwielbienie"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="Facebook page"
                height={40}
                src={fbIcon as StaticImageData}
                width={40}
              />
            </Link>
            <Link
              href="https://www.instagram.com/wnieboglosy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="Instagram page"
                height={40}
                src={igIcon as StaticImageData}
                width={40}
              />
            </Link>
            <Link
              href="https://www.youtube.com/@koncertuwielbieniawniebogo9449"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="YouTube page"
                height={40}
                src={ytIcon as StaticImageData}
                width={40}
              />
            </Link>
          </div>
          <Link
            href="https://coderscrew.pl"
            rel="noopener noreferrer"
            target="_blank"
          >
            Realizacja strony: CodersCrew
          </Link>
        </div>
        <div className="flex flex-col gap-2 pt-6">
          <p className="font-semibold">
            Fundacja na Rzecz Rozwoju Młodzieży „Młodzi Młodym”
          </p>
          <div>
            <p>ul. Katedralna 4</p>
            <p>50-328 Wrocław</p>
          </div>
          <div>
            <p>NIP: 8982214088</p>
            <p>REGON: 362550415</p>
            <p>KRS: 0000575737</p>
            <p>
              Numer konta:{' '}
              <span className="whitespace-nowrap">
                PL 11 1600 1156 1841 2596 5000 0001
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
