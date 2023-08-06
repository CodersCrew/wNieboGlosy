import Image from 'next/image';

const BottomNav = () => (
  <div className="fixed bottom-0 flex w-full justify-center gap-5 border-t border-primary bg-white py-2 text-xs lg:hidden">
    <div className="flex flex-col items-center justify-center">
      <Image alt="O nas" height={24} src="/assets/usersIcon.svg" width={24} />
      <p>O nas</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <Image alt="O nas" height={24} src="/assets/musicIcon.svg" width={24} />
      <p>Muzycy</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <Image alt="O nas" height={24} src="/assets/imageIcon.svg" width={24} />
      <p>Galeria</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <Image alt="O nas" height={24} src="/assets/checkIcon.svg" width={24} />
      <p>Dołącz</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <Image alt="O nas" height={24} src="/assets/moneyIcon.svg" width={24} />
      <p>Wesprzyj nas</p>
    </div>
  </div>
);

export default BottomNav;
