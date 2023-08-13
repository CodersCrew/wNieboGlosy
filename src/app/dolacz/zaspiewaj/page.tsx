'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import Button from '@/components/Button';
import CheckContainer from '@/components/CheckContainer';
import Footer from '@/components/Footer';
import LeaderCard from '@/components/LeaderCard';
import artur from '@/public/assets/dolacz/artur-koza.jpeg';
import choirImage from '@/public/assets/dolacz/choir-women.jpeg';
import peopleImage from '@/public/assets/dolacz/people-outlined.svg';
import sara from '@/public/assets/dolacz/sara-nestorowicz.jpeg';
import dateIcon from '@/public/assets/icons/date.svg';
import locationIcon from '@/public/assets/icons/location.svg';

const CHECK_CONTENT = [
  { id: 1, content: 'Posiadasz minimalne doświadczenie w śpiewie zespołowym.' },
  {
    id: 2,
    content:
      'Masz predyspozycje do wykonywania muzyki (warunki głosowe oraz słuch muzyczny).'
  },
  { id: 3, content: 'Mile widziane osoby w każdym wieku.' },
  { id: 4, content: 'Osoby niepełnoletnie muszą posiadać zgodę rodziców.' }
];
const LEADERS = [
  {
    imageSrc: sara,
    name: 'Sara Nestorowicz',
    role: 'Dyrygent chóru',
    description:
      'Od początku związana z wNieboGłosami. Dzięki rodzicom pokochała muzykę śpiewając w chórze gospel. Ukończyła Państwową Ogólnokształcącą Szkołę Muzyczną im. Stanisława Moniuszki w Bielsku-Białej na saksofonie, a następnie kształciła się na wrocławskiej Akademii Muzycznej im. Karola Lipińskiego na kierunkach Edukacja Muzyczna oraz Prowadzenie zespołów wokalnych i wokalno-instrumentalnych. W czasie edukacji śpiewała w chórach regularnie koncertując, także za granicą. Wiele lat szkoliła swój głos pod okiem Aleksandry Osieckiej-Skoblewskiej w zespole rozrywkowym „Satin voices”. Oddała się pracy dyrygenta w Chórze Dziecięcym przy Domu Kultury Zachód oraz Chórze Światowych Dni Młodzieży we Wrocławiu. Obecnie uczy muzyki w szkole podstawowej, tworzy scholę parafialną, współpracuje jako instruktor przy tworzeniu chórów podczas Warsztatów Uwielbienia w Opolu, Warsztatów Gospel oraz Koncertu Uwielbienia w Bielsku-Białej, Bydgoszczy. Jest członkiem projektu „Śpiewająca Polska”, prowadzonego przez Narodowe Forum Muzyki. Prywatnie szczęśliwa żona i mama.'
  },
  {
    imageSrc: artur,
    name: 'Artur Koza',
    role: 'Dyrygent orkiestry',
    description:
      'Ukończył Akademię Muzyczną im. K. Lipińskiego we Wrocławiu w klasie gitary klasycznej prof. Piotra Zaleskiego oraz dyrygentury symfonicznej prof. Mieczysława Gawrońskiego. W latach 2013-2020 uczył gry na gitarze w dolnośląskich szkołach muzycznych. Był członkiem licznych zespołów kameralnych oraz współpracował z muzykami wszelkich specjalności. Laureat wielu nagród na konkursach gitarowych. W latach 2018-2021 był asystentem Polskiego Narodowego Chóru Młodzieżowego oraz Chóru Narodowego Forum Muzyki we Wrocławiu. Dyrygował zespołami kameralnymi, chórami oraz orkiestrami. Uczestniczył w kursach dyrygenckich prowadzonych m.in. przez Maestro Gabriela Chmurę, Marka Pijarowskiego czy Achima Holuba. Obecnie pracuje w Zespole Szkół Salezjańskich DON BOSCO we Wrocławiu gdzie prowadzi koło gitarowe oraz chór. Swoją pasję do muzyki podziela z żoną Natalią, z którą tworzy duet łączący brzmienie śpiewu klasycznego i gitary klasycznej.'
  }
];

const [Sara, Artur] = LEADERS;

const getWords = (text: string, words: number): string =>
  text.toString().split(' ').slice(0, Number(words)).join(' ');

const SingInChoir = () => (
  <div className="bg-gradient pt-18 lg:pt-[101px]">
    <div className="mx-auto flex max-w-lg flex-col justify-center gap-y-6 px-4 lg:max-w-[1440px]">
      <div className="flex flex-col gap-y-6">
        <h1 className="mb-4 mt-6 text-center font-cinzel text-[1.75rem] font-normal capitalize leading-[2.1rem] tracking-[-.0175] text-primary lg:my-[6rem] lg:text-[4rem]">
          Zaśpiewaj w chórze
        </h1>
        <div className="flex max-w-screen-xl flex-col justify-center gap-y-6 lg:flex-row lg:items-center xl:mx-auto xl:gap-10">
          <div className="flex flex-col gap-6 font-raleway text-base font-light leading-normal text-black lg:p-5 lg:px-5 lg:leading-normal xl:text-[1.25rem]">
            <p>
              Serdecznie zapraszamy do współtworzenia Chóru, który wystąpi na
              scenie podczas uwielbienia wNieboGłosy razem z Zespołem i
              Orkiestrą.
            </p>
            <p>
              Aby zestroić serce i ducha, jeszcze przed wydarzeniem zapraszamy
              na otwarte warsztaty muzyczne. Będzie to czas nie tylko pracy nad
              repertuarem i techniką śpiewu, ale także modlitwy oraz
              przygotowania do wspólnego uwielbienia w dniu Bożego Ciała.
            </p>
            <div className="flex flex-col gap-y-[1.12rem] text-base font-semibold lg:font-normal">
              <span className="flex items-center gap-x-6">
                <Image
                  alt="Ikona lokalizacji"
                  src={locationIcon as StaticImageData}
                />
                Wrocław, pl. Grunwaldzki
              </span>
              <span className="flex items-center gap-x-6 ">
                <Image alt="Ikona z datą" src={dateIcon as StaticImageData} />
                Dwa majowe weekendy
              </span>
            </div>
          </div>
          <Image
            alt="Kobiety śpiewające w chórze"
            className="my-6  rounded-lg lg:my-0 lg:h-[28.125rem] lg:max-w-[37.5rem]   lg:object-cover"
            src={choirImage}
          />
        </div>
      </div>
      <div className="mx-auto grid  max-w-screen-xl justify-items-center gap-6 lg:mt-40 lg:grid-cols-1 lg:grid-rows-1">
        <div className="mx-5 my-10 flex max-w-[608px] flex-col  rounded-[40px] lg:mx-0 lg:border-[3px] lg:border-border  lg:px-5 lg:py-10">
          <h2 className="mb-8 self-center text-2xl font-medium text-primary">
            Dla kogo?
          </h2>
          {CHECK_CONTENT.map(({ id, content }) => (
            <CheckContainer content={content} key={id} />
          ))}
        </div>
        <Image
          alt="Narysowani ludzie"
          className="order-2 lg:order-first lg:h-[370px]  lg:self-center"
          height={300}
          src={peopleImage as StaticImageData}
        />
        <Button
          breakpoint="lg"
          className="bg-primary lg:col-span-2 lg:row-end-3"
          variant="contained"
        >
          Zapisz się na warsztaty
        </Button>
      </div>
    </div>
    <div>
      <div className="mt-20 flex flex-col items-center">
        <h2 className="mb-8 font-cinzel text-[28px] font-medium leading-8 text-primary lg:text-6xl lg:font-normal lg:tracking-[-.64px]">
          Prowadzący warsztaty
        </h2>
        <p className="max-w-sm px-5 text-center font-raleway text-base font-light lg:max-w-[943px] lg:text-xl lg:font-normal lg:leading-8">
          Podczas warsztatów Chór z towarzyszeniem Zespołu wNieboGłosy będzie
          pracował pod okiem dyrygentki Sary Nestorowicz oraz Natalii Kozy,
          natomiast Orkiestrę poprowadzi Artur Koza, który nada ostateczne
          szlify brzmieniowe całości. Opiekę duszpasterską będzie sprawował ks.
          Piotr Wawrzynek.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-screen-xl  px-5 lg:mt-40">
        <LeaderCard
          description={getWords(Sara.description, 33)}
          imageSrc={Sara.imageSrc}
          name={Sara.name}
          role={Sara.role}
        />
        <LeaderCard
          className="pb-10 lg:flex-row-reverse"
          description={getWords(Artur.description, 32)}
          imageSrc={Artur.imageSrc}
          name={Artur.name}
          role={Artur.role}
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default SingInChoir;
