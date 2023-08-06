import Image from 'next/image';

import Button from './Button';

const Header = () => (
  <div className="fixed top-0 z-40 w-full bg-gradient-to-b from-[#1C2746] to-[#1D2543]/3 px-5">
    <div className="m-auto flex h-18 max-w-[1440px] items-center justify-between">
      <Image
        alt="Logo wNieboGłosów"
        height={40}
        src="/assets/logo.svg"
        width={40}
      />
      <Button className="lg:hidden" variant="outlinedWhite">
        DOŁĄCZ DO ZRZUTKI
      </Button>
      <div className="hidden gap-6 lg:flex">
        <Button className="lg:p-2" variant="textWhite">
          O nas
        </Button>
        <Button className="lg:p-2" variant="textWhite">
          Muzycy
        </Button>
        <Button className="lg:p-2" variant="textWhite">
          Galeria
        </Button>
        <Button className="lg:p-2" variant="textWhite">
          Dołącz
        </Button>
        <Button className="lg:p-2" variant="textWhite">
          Wesprzyj nas
        </Button>
        <Button variant="outlinedWhite">Dołącz do zrzutki</Button>
      </div>
    </div>
  </div>
);

export default Header;
