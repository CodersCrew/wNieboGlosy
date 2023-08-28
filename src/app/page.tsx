import Link from 'next/link';

import Button from '@/components/Button';
import Counter from '@/components/Counter';

const WelcomePage = () => {
  return (
    <div className="grid min-h-screen w-full place-content-center place-items-center gap-y-8 bg-welcomePage bg-cover bg-center font-cinzel text-xl  font-bold text-white md:text-2xl lg:text-3xl ">
      <Link href="/o-nas">
        <p className="rounded-md bg-black/70 px-1 py-2 text-3xl lg:px-5 lg:text-6xl">
          wNieboGłosy
        </p>
      </Link>
      <p className="rounded-md bg-black/70 px-1 py-2 lg:px-5">Piąta edycja</p>
      <Counter targetDate="2023-09-01:19:30:00" />
      <p className="max-w-xl rounded-md bg-black/70 px-1 py-2 text-center lg:px-5">
        Uroczystość Najświętszego Ciała i Krwi Chrystusa Boże Ciało
      </p>
      <p className="rounded-md bg-black/70 px-1 py-2 lg:px-5">
        1 września 2023, godz. 19:30
      </p>
      <p className="rounded-md bg-black/70 px-1 py-2 lg:px-5">
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
  );
};

export default WelcomePage;
