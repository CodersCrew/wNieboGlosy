import Image from 'next/image';

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import LeaderCard from '@/components/LeaderCard';
import data from '@/public/muzycy/tresc.json';

const Musicians = () => (
  <div>
    <div className="relative overflow-hidden">
      <Image
        alt="muzycy"
        className="min-h-[50vh] w-full object-cover 2xl:max-h-[85vh]"
        height={1080}
        src={data.naglowek.img}
        width={1920}
      />
      <Image
        alt="Nuta"
        className="absolute right-10 top-2/4 z-10 w-full scale-150 sm:scale-125"
        height={100}
        src="/icons/musical-note.svg"
        width={100}
      />
      <div className="header-gradient absolute inset-0 opacity-80" />
      <div className="header-shadow absolute inset-0" />
      <h1 className="absolute left-10 top-1/3 font-cinzel text-[2rem] font-normal leading-[-.025] text-white sm:top-2/4 sm:text-[3.5rem] md:left-16 md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7.5rem]">
        {data.naglowek.tytul}
      </h1>
    </div>
    <div className="mx-auto mt-26 lg:grid lg:grid-cols-2">
      <div className="mb-10 flex flex-col items-center gap-8 border-[#0000004D] lg:mb-0 lg:items-start lg:border-b-[1.9px]">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-5 lg:ml-20 lg:items-start 2xl:ml-30">
          <h2 className="text-center font-cinzel text-3xl font-normal tracking-[-.05rem] lg:text-start lg:text-6xl">
            {data.sekcja1.tytul}
          </h2>
          <p className="text-base lg:text-lg">{data.sekcja1.opis}</p>
          <Button
            breakpoint="lg"
            className="mt-8 px-9 uppercase lg:mb-20"
            href={data.sekcja1.przycisk.strona}
            rightArrow
            variant="outlined"
          >
            {data.sekcja1.przycisk.tekst}
          </Button>
        </div>
      </div>
      <div className="flex justify-center lg:items-end">
        <span className="-mr-[35px] w-full border-b-[1.9px] border-[#0000004D]" />
        <Image
          alt="Kobieta grająca na skrzypcach"
          className="z-50"
          height={400}
          src="/icons/woman-violin.webp"
          width={400}
        />
        <span className="hidden w-1/4 border-b-[1.9px] border-[#0000004D] sm:block" />
      </div>
    </div>
    <div className="bg-gradient">
      <div className="mb-20 flex flex-col items-center justify-center gap-4 px-5 ">
        <h2 className="mt-20 text-center font-cinzel text-3xl font-normal capitalize tracking-[-.05rem] lg:text-start lg:text-6xl">
          {data.muzycy.tytul}
        </h2>
        <p className="text-center text-base lg:text-lg">{data.muzycy.opis}</p>
      </div>
      <div className="pb-4">
        {data.muzycy.muzycy.map((musician, index) => (
          <LeaderCard
            className={index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}
            description={musician.opis}
            imageSrc={musician.zdjecie}
            key={musician.osoba}
            name={musician.osoba}
            role={musician.rola}
            textLeft
          />
        ))}
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl items-center lg:grid lg:grid-cols-2">
      <div className="mb-10 flex flex-col items-center gap-8 lg:mb-0 lg:items-start">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-5 lg:ml-20 lg:items-start 2xl:ml-30">
          <h2 className="text-center font-cinzel text-3xl font-normal capitalize tracking-[-.05rem] text-primary lg:text-start lg:text-6xl">
            {data.sekcja2.tytul}
          </h2>
          <p className="text-base lg:text-lg">{data.sekcja2.opis}</p>
          <Button
            breakpoint="lg"
            className="mt-10 px-9 uppercase lg:mb-20"
            href={data.sekcja2.przycisk.strona}
            rightArrow
            variant="contained"
          >
            {data.sekcja2.przycisk.tekst}
          </Button>
        </div>
      </div>
      <div className="px-15">
        <Image
          alt="Pięciolinia"
          className="m-auto"
          height={400}
          src="/muzycy/zdjecia/stave.webp"
          width={400}
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default Musicians;
