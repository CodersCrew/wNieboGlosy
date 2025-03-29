import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import data from '@/public/o-nas/tresc.json';

const About = () => (
  <div className="lg:bg-[#F9FCFF]">
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className="relative h-[360px] w-full overflow-hidden lg:h-[728px]">
        <Image
          alt="Grupa wNieboGłosy"
          className="object-cover"
          fill
          src={data.naglowek.img}
        />
        <div className="absolute -right-64 top-1/3 z-10 h-[171px] w-[1024px] scale-75 sm:right-0 sm:scale-100 lg:top-1/2 lg:h-full lg:w-full lg:-translate-y-1/2 lg:scale-105">
          <Image
            alt="nuta"
            className="object-contain"
            fill
            src="/icons/note.svg"
          />
        </div>
        <h1 className="relative left-7 top-1/2 z-10 w-4/6 -translate-y-1/2 font-cinzel text-4.5xl capitalize leading-[3rem] text-white lg:left-[120px] lg:top-[37%] lg:text-[120px] lg:leading-normal">
          {data.naglowek.tytul}
          <span className="absolute text-[2rem] bottom-0 left-0">19.06.2025</span>
        </h1>
        <div className="header-gradient absolute inset-0 opacity-80" />
        <div className="header-shadow absolute inset-0" />
      </div>

      <div className="mt-10 max-w-[1440px] px-5 lg:mt-12 lg:px-30">
        <h2 className="text-center font-cinzel text-2xl lg:mb-2 lg:text-5xl">
          {data.sekcja1.tytul}
        </h2>
        <p className="text-center font-raleway lg:text-3xl">
          {data.sekcja1.podtytul}
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 px-5 py-10 lg:flex-row lg:gap-7 lg:px-30 lg:py-[6.5rem]">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-4 font-cinzel text-2.5xl uppercase lg:mb-6 lg:text-6.5xl">
            {data.sekcja2.tytul}
          </h2>
          <p className="font-raleway lg:text-xl">{data.sekcja2.tresc}</p>
          <div className="mt-8 lg:mt-12">
            <Button
              breakpoint="lg"
              className="uppercase"
              href={data.sekcja2.przycisk.strona}
              rightArrow
              variant="outlined"
            >
              {data.sekcja2.przycisk.tekst}
            </Button>
          </div>
        </div>
        <div className="min-w-[320px] lg:flex-[0_0_52%]">
          <Image
            alt="Grupa wNieboGłosy"
            className="rounded-lg"
            height={471}
            layout="responsive"
            src={data.sekcja2.zdjecie}
            width={628}
          />
        </div>
      </div>

      <div className="w-full border-b bg-bg-secondary lg:border-b-[1.5px] lg:border-[#0000004D]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 px-5 py-10 lg:flex-row-reverse lg:gap-7 lg:px-30 lg:py-[6.5rem]">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="mb-4 whitespace-nowrap font-cinzel text-2.5xl uppercase lg:mb-6 lg:text-6.5xl">
              {data.sekcja3.tytul}
            </h2>
            <p className="font-raleway lg:text-xl">{data.sekcja3.tresc}</p>
            <div className="mt-8 lg:mt-12">
              <Button
                breakpoint="lg"
                className="uppercase"
                href={data.sekcja3.przycisk.strona}
                rightArrow
                variant="outlined"
              >
                {data.sekcja3.przycisk.tekst}
              </Button>
            </div>
          </div>
          <div className="min-w-[320px] lg:flex-[0_0_52%]">
            <Image
              alt="Kobiety grające na skrzypcach"
              className="rounded-lg"
              height={471}
              layout="responsive"
              src={data.sekcja3.zdjecie}
              width={628}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-[1440px] px-5 lg:mt-12 lg:px-30">
        <h2 className="text-center font-cinzel text-2xl lg:mb-2 lg:text-5xl">
          {data.sekcja4.tytul}
        </h2>
        <p className="text-center font-raleway lg:text-3xl">
          {data.sekcja4.tresc}
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-8 px-5 py-10 lg:flex-row lg:gap-7 lg:px-30 lg:py-[6.5rem]">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-4 font-cinzel text-2.5xl uppercase lg:mb-6 lg:text-6.5xl">
            {data.sekcja5.tytul}
          </h2>
          <p className="font-raleway lg:text-xl">{data.sekcja4.tresc}</p>
          <div className="mt-8 lg:mt-12">
            <Button
              breakpoint="lg"
              className="uppercase"
              href={data.sekcja5.przycisk.strona}
              rightArrow
              variant="contained"
            >
              {data.sekcja5.przycisk.tekst}
            </Button>
          </div>
        </div>
        <div className="min-w-[320px] lg:flex-[0_0_52%]">
          <Image
            alt="Ręce obejmujące gołębia"
            height={471}
            layout="responsive"
            src={data.sekcja5.zdjecie}
            width={628}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 lg:px-30 lg:py-2">
        <h2 className="mb-4 text-center font-cinzel text-2.5xl uppercase lg:mb-6 lg:text-6.5xl">
          {data.patroni.tytul}
        </h2>
        <div className="flex flex-col flex-wrap items-center gap-y-5 lg:flex-row lg:justify-center lg:gap-x-10">
          {data.patroni.patroni.map(patron => (
            <Link
              className="grayscale transition-all hover:grayscale-0"
              href={patron.url}
              key={patron.url}
            >
              <Image
                alt={patron.nazwa}
                height={0}
                sizes="100vw"
                src={patron.zdjecie}
                style={{ width: 'auto', height: '6rem' }}
                width={0}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
