import Image from 'next/image';

import Button from '@/components/Button';
import CheckContainer from '@/components/CheckContainer';
import Footer from '@/components/Footer';
import LeaderCard from '@/components/LeaderCard';
import data from '@/public/zaspiewaj/tresc.json';
import isURL from '@/utils/isURL';

const SingInChoir = () => (
  <div className="bg-gradient pt-18 lg:pt-[101px]">
    <div className="mx-auto flex max-w-lg flex-col justify-center gap-y-6 px-4 lg:max-w-[1440px]">
      <div className="flex flex-col gap-y-6">
        <h1 className="mb-4 mt-6 text-center font-cinzel text-[1.75rem] font-normal capitalize leading-[2.1rem] tracking-[-.0175] text-primary lg:my-[6rem] lg:text-[4rem]">
          {data.tytul}
        </h1>
        <div className="flex max-w-screen-xl flex-col justify-center gap-y-6 lg:flex-row lg:items-center xl:mx-auto xl:gap-10">
          <div className="flex flex-col gap-6 font-raleway text-base font-light leading-normal text-black lg:p-5 lg:px-5 lg:leading-normal xl:text-[1.25rem]">
            <p>{data.sekcja1.opis}</p>
            <div className="flex flex-col gap-y-[1.12rem] text-base font-semibold lg:font-normal">
              <span className="flex items-center gap-x-6">
                <Image
                  alt="Ikona lokalizacji"
                  height={24}
                  src="/icons/location.svg"
                  width={24}
                />
                {data.sekcja1.miejsce}
              </span>
              <span className="flex items-center gap-x-6 ">
                <Image
                  alt="Ikona z datą"
                  height={24}
                  src="/icons/date.svg"
                  width={24}
                />
                {data.sekcja1.czas}
              </span>
            </div>
          </div>
          <Image
            alt="Kobiety śpiewające w chórze"
            className="my-6 rounded-lg lg:my-0 lg:h-[28.125rem] lg:max-w-[37.5rem] lg:object-cover"
            height={450}
            src={data.sekcja1.zdjecie}
            width={600}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-xl justify-items-center gap-6 lg:mt-40 lg:grid-cols-1 lg:grid-rows-1">
        <div className="mx-5 my-10 flex max-w-[608px] flex-col rounded-[40px] lg:mx-0 lg:border-[3px] lg:border-border lg:px-5 lg:py-10">
          <h2 className="mb-8 self-center text-2xl font-medium text-primary">
            {data.sekcja2.tytul}
          </h2>
          {data.sekcja2.wymagania.map(content => (
            <CheckContainer content={content} key={content} />
          ))}
        </div>
        <Image
          alt="Narysowani ludzie"
          className="order-2 lg:order-first lg:h-[370px] lg:self-center"
          height={300}
          src={data.sekcja2.zdjecie}
          width={600}
        />
        <Button
          breakpoint="lg"
          className="bg-primary lg:col-span-2 lg:row-end-3"
          disabled={!isURL(data.sekcja2.przycisk.url)}
          href={
            isURL(data.sekcja2.przycisk.url)
              ? data.sekcja2.przycisk.url
              : undefined
          }
          rightArrow={isURL(data.sekcja2.przycisk.url)}
          variant="contained"
        >
          {data.sekcja2.przycisk.tekst}
        </Button>
      </div>
    </div>

    <div>
      <div className="mt-20 flex flex-col items-center">
        <h2 className="mb-8 font-cinzel text-[28px] font-medium leading-8 text-primary lg:text-6xl lg:font-normal lg:tracking-[-.64px]">
          {data.prowadzacy.tytul}
        </h2>
        <p className="max-w-sm px-5 text-center font-raleway text-base font-light lg:max-w-[943px] lg:text-xl lg:font-normal lg:leading-8">
          {data.prowadzacy.opis}
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-screen-xl px-5 lg:mt-40">
        {data.prowadzacy.prowadzacy.map((prowadzacy, index) => (
          <LeaderCard
            className={index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}
            description={prowadzacy.opis}
            imageSrc={prowadzacy.url}
            key={prowadzacy.osoba}
            name={prowadzacy.osoba}
            role={prowadzacy.rola}
          />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default SingInChoir;
