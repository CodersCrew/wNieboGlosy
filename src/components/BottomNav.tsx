import Image from 'next/image';
import Link from 'next/link';

const BottomNav = () => (
  <div className="fixed bottom-0 flex w-full justify-center gap-5 border-t border-primary bg-white py-2 text-xs lg:hidden">
    <Link className="flex flex-col items-center justify-center" href="/">
      <Image alt="O nas" height={24} src="/assets/usersIcon.svg" width={24} />
      <p>O nas</p>
    </Link>
    <Link className="flex flex-col items-center justify-center" href="/muzycy">
      <Image alt="Muzycy" height={24} src="/assets/musicIcon.svg" width={24} />
      <p>Muzycy</p>
    </Link>
    <Link className="flex flex-col items-center justify-center" href="/galeria">
      <Image alt="Galeria" height={24} src="/assets/imageIcon.svg" width={24} />
      <p>Galeria</p>
    </Link>
    <Link className="flex flex-col items-center justify-center" href="/dolacz">
      <Image alt="Dołącz" height={24} src="/assets/checkIcon.svg" width={24} />
      <p>Dołącz</p>
    </Link>
    <Link
      className="flex flex-col items-center justify-center"
      href="/wsparcie"
    >
      <Image
        alt="Wesprzyj nas"
        height={24}
        src="/assets/moneyIcon.svg"
        width={24}
      />
      <p>Wesprzyj nas</p>
    </Link>
  </div>
);

export default BottomNav;
