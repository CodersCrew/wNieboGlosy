import Link from 'next/link';

import Button from '@/components/Button';
import Counter from '@/components/Counter';
import data from '@/public/powitanie.json';

const WelcomePage = () => (
  <div
    className="w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${data.tlo})` }}
  >
    <div className="m-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center gap-y-6 px-10 font-cinzel text-xl font-bold text-white md:text-2xl lg:text-3xl">
      <div className="w-full">
        <Button
          className="mx-auto max-w-xs text-center transition-colors hover:bg-bg-primary sm:mr-0"
          href={data.przyciskAkcji.strona}
          rightArrow
          variant="containedWhite"
        >
          {data.przyciskAkcji.tekst}
        </Button>
      </div>
      <Link
        className="rounded-md bg-black/70 px-1 py-2 text-3xl lg:px-5 lg:text-6xl"
        href="/o-nas"
      >
        {data.tytul}
      </Link>
      <p className="rounded-md bg-black/70 px-1 py-2 lg:px-5">{data.edycja}</p>
      <Counter targetDate="2024-05-30:19:30:00" />
      <p className="max-w-xl rounded-md bg-black/70 px-1 py-2 text-center lg:px-5">
        {data.opis}
      </p>
      <p className="rounded-md bg-black/70 px-1 py-2 text-center lg:px-5">
        {data.data}
      </p>
      <p className="rounded-md bg-black/70 px-1 py-2 text-center lg:px-5">
        {data.miejsce}
      </p>
      <Button
        className="transition-colors hover:bg-bg-primary"
        href={data.przyciskPrzejsciaDoStrony.strona}
        variant="containedWhite"
      >
        {data.przyciskPrzejsciaDoStrony.tekst}
      </Button>
    </div>
  </div>
);

export default WelcomePage;
