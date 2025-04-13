import Image from 'next/image';
import Link from 'next/link';

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
                src="/icons/fb.svg"
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
                src="/icons/ig.svg"
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
                src="/icons/yt.svg"
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
            Stowarzyszenie Centrum Nowej Ewangelizacji DON BOSCO
          </p>
          <div>
            <p>pl. Grunwaldzki 3</p>
            <p>50-377 Wrocław</p>
          </div>
          <div>
            <p>NIP: 898-18-32-594</p>
            <p>REGON: 930794721</p>
            <p>KRS: 0000097644</p>
            <p>
              Numer konta:{' '}
              <span className="whitespace-nowrap">
                60 1600 1462 1892 0393 2000 0001
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
