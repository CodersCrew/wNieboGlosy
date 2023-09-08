'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import LeaderCard from '@/components/LeaderCard';
import artur from '@/public/assets/dolacz/artur-koza.jpeg';
import daniel from '@/public/assets/dolacz/daniel-pradella.jpeg';
import jacek from '@/public/assets/dolacz/jacek-geremesz.jpeg';
import sara from '@/public/assets/dolacz/sara-nestorowicz.jpeg';
import header from '@/public/assets/muzycy/header.png';
import headerMobile from '@/public/assets/muzycy/header-mobile.png';
import musicalNote from '@/public/assets/muzycy/musical-note.svg';
import stave from '@/public/assets/muzycy/stave.png';
import womanViolin from '@/public/assets/muzycy/woman-violin.png';

const LEADERS = [
  {
    imageSrc: sara,
    name: 'Sara Nestorowicz',
    role: 'Dyrygent chóru',
    description:
      'Od początku związana z\xa0wNieboGłosami. Dzięki rodzicom pokochała muzykę śpiewając w\xa0chórze gospel. Ukończyła Państwową Ogólnokształcącą Szkołę Muzyczną im.\xa0Stanisława Moniuszki w\xa0Bielsku-Białej na saksofonie, a\xa0następnie kształciła się na wrocławskiej Akademii Muzycznej im.\xa0Karola Lipińskiego na kierunkach Edukacja Muzyczna oraz Prowadzenie zespołów wokalnych i\xa0wokalno-instrumentalnych. W\xa0czasie edukacji śpiewała w\xa0chórach regularnie koncertując, także za\xa0granicą. Wiele lat szkoliła swój głos pod okiem Aleksandry Osieckiej-Skoblewskiej w zespole rozrywkowym „Satin voices”. Oddała się pracy dyrygenta w\xa0Chórze Dziecięcym przy Domu Kultury Zachód oraz Chórze Światowych Dni Młodzieży we\xa0Wrocławiu. Obecnie uczy muzyki w szkole podstawowej, tworzy scholę parafialną, współpracuje jako instruktor przy tworzeniu chórów podczas Warsztatów Uwielbienia w\xa0Opolu, Warsztatów Gospel oraz Koncertu Uwielbienia w\xa0Bielsku-Białej, Bydgoszczy. Jest członkiem projektu „Śpiewająca Polska”, prowadzonego przez Narodowe Forum Muzyki. Prywatnie szczęśliwa żona i\xa0mama.'
  },
  {
    imageSrc: artur,
    name: 'Artur Koza',
    role: 'Dyrygent orkiestry',
    description:
      'Ukończył Akademię Muzyczną im.\xa0K.\xa0Lipińskiego we\xa0Wrocławiu w\xa0klasie gitary klasycznej prof.\xa0Piotra Zaleskiego oraz dyrygentury symfonicznej prof.\xa0Mieczysława Gawrońskiego. W\xa0latach 2013-2020 uczył gry na gitarze w\xa0dolnośląskich szkołach muzycznych. Był członkiem licznych zespołów kameralnych oraz współpracował z\xa0muzykami wszelkich specjalności. Laureat wielu nagród na konkursach gitarowych. W\xa0latach 2018-2021 był asystentem Polskiego Narodowego Chóru Młodzieżowego oraz Chóru Narodowego Forum Muzyki we\xa0Wrocławiu. Dyrygował zespołami kameralnymi, chórami oraz orkiestrami. Uczestniczył w\xa0kursach dyrygenckich prowadzonych m.in. przez Maestro Gabriela Chmurę, Marka Pijarowskiego czy Achima Holuba. Obecnie pracuje w\xa0Zespole Szkół Salezjańskich DON BOSCO we\xa0Wrocławiu gdzie prowadzi koło gitarowe oraz chór. Swoją pasję do muzyki podziela z\xa0żoną Natalią, z\xa0którą tworzy duet łączący brzmienie śpiewu klasycznego i\xa0gitary klasycznej.'
  },
  {
    imageSrc: jacek,
    name: 'Jacek Geremesz',
    role: 'Lider zespołu N.O.E',
    description:
      'Od lat łączy życie zawodowe i\xa0rodzinne z\xa0prowadzeniem zespołu N.O.E. aktywnie uczestnicząc w\xa0życiu Kościoła. Ze\xa0swą muzyczną modlitwą zespół pojawia się na wieczorach uwielbienia, czuwaniach, rekolekcjach, chrześcijańskich inicjatywach muzycznych, festiwalach i\xa0koncertach. Zespół jest regularnie zapraszany do parafii i\xa0lokalnych wspólnot, by ze śpiewem i\xa0akompaniamentem instrumentów wspólnie wielbić Pana. Nierzadko ze swą muzyką idą w\xa0Polskę, niosąc dźwięki uwielbienia poza nasz region, a\xa0zdarza się, że\xa0docierają również poza granice państwa. Od 2017 roku Jacek wraz z\xa0zespołem współtworzy muzycznie wNieboGłosy.'
  },
  {
    imageSrc: daniel,
    name: 'Daniel Pradella',
    role: 'Aranżer',
    description:
      'Absolwent Szkoły Muzycznej im.\xa0Stanisława Moniuszki w\xa0Bielsku-Białej na instrumentahc perkusyjnych oraz absolwent Akademii Muzycznej im.\xa0Feliksa Nowowiejskiego w Bydgoszczy na kierunku Jazz i\xa0Muzyka Estradowa specjalność wibrafon jazzowy. Obecnie student Akademii Muzycznej im.\xa0Feliksa Nowowiejskiego w Bydgoszczy na kierunku Jazz i\xa0Muzyka Estradowa specjalność fortepian jazzowy. Organizator Bydgoskich warsztatów Gospelowych oraz Bielskich warsztatów Uwielbienia. Od najmłodszych lat zafascynowany muzyką odnajduję się w\xa0takich gatunkach jak: jazz, gospel, reggae, funk, soul oraz w\xa0muzyce klasycznej. Jego aranżacje rozbrzmiewają w\xa0całej Polsce, choć najczęściej można usłyszeć je w\xa0Bydgoszczy. Pisze dla kwartetów smyczkowych Opera Nova oraz kwartetu Infinito, z\xa0którym nagrał płytę w\xa02018 roku, pisał aranżacje na płycie bydgoskiego wokalisty Leszka Lyczmańskiego, która została wydana w\xa02019\xa0roku. Często można usłyszeć jego aranżacje na wszelakich warsztatach oraz koncertach muzyki chrześcijańskiej.'
  }
];

const [Sara, Artur, Jacek, Daniel] = LEADERS;

const Musicians = () => (
  <div>
    <div className="relative overflow-hidden">
      <Image alt="muzycy" className="w-full sm:hidden" src={headerMobile} />
      <Image
        alt="muzycy"
        className="hidden w-full object-cover sm:block   sm:min-h-[50vh] 2xl:max-h-[85vh]"
        src={header}
      />
      <div className="absolute top-2 h-[125%] w-full bg-musiciansGradientMobile bg-contain bg-no-repeat sm:-top-5 sm:h-[105%] sm:bg-musiciansGradient sm:bg-cover 2xl:top-0 2xl:h-full "></div>
      <Image
        alt="Nuta"
        className="absolute right-10 top-2/4 z-10 w-full scale-150 sm:scale-125"
        src={musicalNote as StaticImageData}
      />
      <div className="header-gradient absolute inset-0 opacity-80" />
      <div className="header-shadow absolute inset-0" />
      <h1 className="absolute left-10 top-1/3 font-cinzel text-[2rem] font-normal leading-[-.025] text-white sm:top-2/4 sm:text-[3.5rem] md:left-16 md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7.5rem]">
        Nasi <br className="sm:hidden" /> muzycy
      </h1>
    </div>
    <div className="mx-auto mt-26 lg:grid lg:grid-cols-2">
      <div className="mb-10 flex flex-col items-center gap-8 border-[#0000004D] lg:mb-0 lg:items-start lg:border-b-[1.9px]">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-5 lg:ml-20 lg:items-start 2xl:ml-30">
          <h2 className="text-center font-cinzel text-3xl font-normal tracking-[-.05rem] lg:text-start lg:text-6xl">
            wNieboGłosy w&nbsp;obiektywie
          </h2>
          <p className="text-base lg:text-lg">
            W nastrój uwielbienia wprowadzą nas wspaniali wrocławscy muzycy:
            Orkiestra, Chór i&nbsp;Zespół wNieboGłosy, którzy wraz
            z&nbsp;członkami zespołu N.O.E. wykonają znane utwory uwielbienia,
            zaaranżowane przez Daniela Pradellę specjalnie na ten wieczór. Tak
            jak w poprzednich edycjach chórzystów poprowadzi energiczna Sara
            Nestorowicz, a&nbsp;orkiestrę niezastąpiony Artur Koza, do których
            dołączają muzycy N.O.E. wraz z&nbsp;liderem&nbsp;-&nbsp;Jackiem
            Geremeszem.
          </p>
          <Button
            breakpoint="lg"
            className="mt-8 px-9 uppercase lg:mb-20"
            href="/galeria"
            rightArrow
            variant="outlined"
          >
            Zobacz galerię
          </Button>
        </div>
      </div>
      <div className="flex justify-center lg:items-end">
        <span className="w-full border-b-[1.9px] border-[#0000004D]"></span>
        <Image
          alt="Kobieta grająca na skrzypcach"
          className=""
          src={womanViolin}
        />
        <span className="hidden w-1/4 border-b-[1.9px] border-[#0000004D] sm:block"></span>
      </div>
    </div>
    <div className="bg-gradient">
      <div className="mb-20 flex flex-col items-center justify-center gap-4 px-5 ">
        <h2 className="mt-20 text-center font-cinzel text-3xl font-normal capitalize tracking-[-.05rem] lg:text-start lg:text-6xl">
          Poznaj naszych muzyków
        </h2>
        <p className="text-center text-base lg:text-lg">
          Zobacz kto muzycznie inspiruje wNieboGłosy oraz prowadzi chór
          i&nbsp;orkiestrę.
        </p>
      </div>
      <div className="pb-4">
        <LeaderCard
          description={Sara.description}
          imageSrc={Sara.imageSrc}
          name={Sara.name}
          role={Sara.role}
          textLeft
          withButton
        />
        <LeaderCard
          className="lg:flex-row-reverse "
          description={Artur.description}
          imageSrc={Artur.imageSrc}
          name={Artur.name}
          role={Artur.role}
          textLeft
          withButton
        />
        <LeaderCard
          description={Jacek.description}
          imageSrc={Jacek.imageSrc}
          name={Jacek.name}
          role={Jacek.role}
          textLeft
          withButton
        />
        <LeaderCard
          className="lg:flex-row-reverse"
          description={Daniel.description}
          imageSrc={Daniel.imageSrc}
          name={Daniel.name}
          role={Daniel.role}
          textLeft
          withButton
        />
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl lg:grid lg:grid-cols-2">
      <div className="mb-10 flex flex-col items-center gap-8 lg:mb-0 lg:items-start">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-5 lg:ml-20 lg:items-start 2xl:ml-30">
          <h2 className="text-center font-cinzel text-3xl font-normal capitalize tracking-[-.05rem] text-primary lg:text-start lg:text-6xl">
            Chór
          </h2>
          <p className="text-base lg:text-lg">
            Na scenie podczas uwielbienia wNieboGłosy razem z Zespołem
            i&nbsp;Orkiestrą występuje także Chór. Prowadzony jest on przez Sarę
            Nestorowicz. Jeśli interesuje Cię śpiew i&nbsp;chcesz wystąpić
            podczas tego wydarzenia, dołącz do chóru.
          </p>
          <Button
            breakpoint="lg"
            className="mt-10 px-9 uppercase lg:mb-20"
            href="/dolacz"
            rightArrow
            variant="contained"
          >
            Dołącz do chóru
          </Button>
        </div>
      </div>
      <div className="p-15">
        <Image alt="Pięciolinia" src={stave} />
      </div>
    </div>
    <Footer />
  </div>
);

export default Musicians;
