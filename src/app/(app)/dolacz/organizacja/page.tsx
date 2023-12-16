import Image from 'next/image';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import data from '@/public/organizacja/tresc.json';

const JoinOrganization = () => (
  <div className="bg-gradient min-h-screen">
    <div className="mx-auto max-w-3xl px-5 pt-18 lg:max-w-[1440px] lg:px-30 lg:pt-[101px]">
      <div className="flex flex-col items-center gap-8 py-10 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="mb-4 text-center font-cinzel text-2.5xl md:text-6.5xl lg:text-left">
            {data.sekcja1.tytul}
          </h1>
          <p className="mb-8 md:text-xl">{data.sekcja1.opis}</p>
          <Button
            breakpoint="lg"
            href={data.sekcja1.przycisk.url}
            rightArrow
            variant="contained"
          >
            {data.sekcja1.przycisk.tekst}
          </Button>
        </div>
        <div className="relative h-[310px] w-full max-w-[450px] lg:h-[600px]">
          <Image
            alt="Siostra zakonna przytulająca osobę"
            className="rounded-lg object-cover"
            fill
            src="/organizacja/zdjecia/organizacja.webp"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 py-10 lg:gap-3">
        {data.karty.map(karta => (
          <Card
            buttonText={karta.przycisk.tekst}
            content={karta.opis}
            href={karta.przycisk.url}
            key={karta.tytul}
            title={karta.tytul}
          />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default JoinOrganization;
