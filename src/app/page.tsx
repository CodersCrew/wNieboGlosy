import Link from 'next/link';

import Button from '@/components/Button';
import Counter from '@/components/Counter';

const WelcomePage = () => (
  <div className="w-full bg-welcomePage bg-cover bg-center">
    <div className="m-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center gap-y-6 px-10 font-cinzel text-xl font-bold text-white md:text-2xl lg:text-3xl">
      <div className="w-full">
        <Button
          className="mx-auto max-w-xs text-center transition-colors hover:bg-bg-primary sm:mr-0"
          href="/dolacz/organizacja"
          rightArrow
          variant="containedWhite"
        >
          Dołącz do nas, rekrutujemy!
        </Button>
      </div>
      <Link
        className="rounded-md bg-black/70 px-1 py-2 text-3xl lg:px-5 lg:text-6xl"
        href="/o-nas"
      >
        wNieboGłosy
      </Link>
      <p className="rounded-md bg-black/70 px-1 py-2 lg:px-5">Szósta edycja</p>
      <Counter targetDate="2024-05-30:19:30:00" />
      <p className="max-w-xl rounded-md bg-black/70 px-1 py-2 text-center lg:px-5">
        Uroczystość Najświętszego Ciała i&nbsp;Krwi Chrystusa, Boże&nbsp;Ciało
      </p>
      <p className="rounded-md bg-black/70 px-1 py-2 text-center lg:px-5">
        30 maja 2024 r., godz. 19:30
      </p>
      <p className="rounded-md bg-black/70 px-1 py-2 text-center lg:px-5">
        Wrocław, pl. Wolności
      </p>
      <Button
        className="transition-colors hover:bg-bg-primary"
        href="/o-nas"
        variant="containedWhite"
      >
        Przejdź do strony
      </Button>
    </div>
  </div>
);

export default WelcomePage;
