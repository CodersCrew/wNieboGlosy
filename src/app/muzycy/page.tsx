'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import Button from '@/components/Button';
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
      'Od początku związana z wNieboGłosami. Dzięki rodzicom pokochała muzykę śpiewając w chórze gospel. Ukończyła Państwową Ogólnokształcącą Szkołę Muzyczną im. Stanisława Moniuszki w Bielsku-Białej na saksofonie, a następnie kształciła się na wrocławskiej Akademii Muzycznej im. Karola Lipińskiego na kierunkach Edukacja Muzyczna oraz Prowadzenie zespołów wokalnych i wokalno-instrumentalnych. W czasie edukacji śpiewała w chórach regularnie koncertując, także za granicą. Wiele lat szkoliła swój głos pod okiem Aleksandry Osieckiej-Skoblewskiej w zespole rozrywkowym „Satin voices”. Oddała się pracy dyrygenta w Chórze Dziecięcym przy Domu Kultury Zachód oraz Chórze Światowych Dni Młodzieży we Wrocławiu. Obecnie uczy muzyki w szkole podstawowej, tworzy scholę parafialną, współpracuje jako instruktor przy tworzeniu chórów podczas Warsztatów Uwielbienia w Opolu, Warsztatów Gospel oraz Koncertu Uwielbienia w Bielsku-Białej, Bydgoszczy. Jest członkiem projektu „Śpiewająca Polska”, prowadzonego przez Narodowe Forum Muzyki. Prywatnie szczęśliwa żona i mama.',
    fbLink: 'http://www.facebook.com',
    igLink: 'https://www.instagram.com'
  },
  {
    imageSrc: artur,
    name: 'Artur Koza',
    role: 'Dyrygent orkiestry',
    description:
      'Ukończył Akademię Muzyczną im. K. Lipińskiego we Wrocławiu w klasie gitary klasycznej prof. Piotra Zaleskiego oraz dyrygentury symfonicznej prof. Mieczysława Gawrońskiego. W latach 2013-2020 uczył gry na gitarze w dolnośląskich szkołach muzycznych. Był członkiem licznych zespołów kameralnych oraz współpracował z muzykami wszelkich specjalności. Laureat wielu nagród na konkursach gitarowych. W latach 2018-2021 był asystentem Polskiego Narodowego Chóru Młodzieżowego oraz Chóru Narodowego Forum Muzyki we Wrocławiu. Dyrygował zespołami kameralnymi, chórami oraz orkiestrami. Uczestniczył w kursach dyrygenckich prowadzonych m.in. przez Maestro Gabriela Chmurę, Marka Pijarowskiego czy Achima Holuba. Obecnie pracuje w Zespole Szkół Salezjańskich DON BOSCO we Wrocławiu gdzie prowadzi koło gitarowe oraz chór. Swoją pasję do muzyki podziela z żoną Natalią, z którą tworzy duet łączący brzmienie śpiewu klasycznego i gitary klasycznej.',
    fbLink: 'http://www.facebook.com',
    igLink: 'https://www.instagram.com'
  },
  {
    imageSrc: jacek,
    name: 'Jacek Geremesz',
    role: 'Lider zespołu N.O.E',
    description:
      'Od lat łączy życie zawodowe i rodzinne z prowadzeniem zespołu N.O.E aktywnie uczestnicząc w życiu Kościoła. Ze swą muzyczną modlitwą zespół pojawia się na wieczorach uwielbienia, czuwaniach, rekolekcjach,  chrześcijańskich inicjatywach muzycznych, festiwalach i koncertach. Zespół jest regularnie zapraszany do parafii i lokalnych wspólnot, by ze śpiewem i akompaniamentem instrumentów wspólnie wielbić Pana. Nierzadko ze swą muzyką idą w Polskę, niosąc dźwięki uwielbienia poza nasz region, a zdarza się, że docierają również poza granice państwa. Od 2017 roku Jacek wraz z zespołem współtworzy muzycznie wNieboGłosy.',
    fbLink: 'http://www.facebook.com',
    igLink: 'https://www.instagram.com'
  },
  {
    imageSrc: daniel,
    name: 'Daniel Pradella',
    role: 'Dyrygent orkiestry',
    description:
      'Absolwent Szkoły Muzycznej im. Stanisława Moniuszki w Bielsku-Białej na instrumentac perkusyjnych oraz absolwent Akademii Muzycznej im. Feliksa Nowowiejskiego w Bydgoszczy nakierunku Jazz i Muzyka Estradowa specjalność wibrafon jazzowy. Obecnie student AkademiiMuzycznej im. Feliksa Nowowiejskiego w Bydgoszczy na kierunku Jazz i Muzyka Estradowa specjalność fortepian jazzowy.Organizator Bydgoskich warsztatów Gospelowych oraz Bielski warsztatów Uwielbienia. Od najmłodszych lat zafascynowany muzyką odnajduję się w taki gatunkach jak: jazz, gospel, reggae,funk,soul oraz w muzyce klasycznej. Jego aranżacje rozbrzmiewają w całej Polsce, choć najczęściej można usłyszeć je w Bydgoszczy. Pisze dla kwartetów smyczkowych Opera Nova oraz kwartetu Infinito,z którym nagrał płytę w 2018 roku, pisał aranżacje na płycie bydgoskiego wokalisty Leszka Lyczmańskiego, która została wydana w 2019 roku. Często można usłyszeć jego aranżacje na wszelakich warsztatach oraz koncertach muzyki chrześcijańskiej.',
    fbLink: 'http://www.facebook.com',
    igLink: 'https://www.instagram.com'
  }
];

const [Sara, Artur, Jacek, Daniel] = LEADERS;

const Musicians = () => (
  <div className="">
    <div className="">
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
          className="absolute right-10 top-2/4 w-full scale-150 sm:scale-125"
          src={musicalNote as StaticImageData}
        />
        <h1 className="absolute left-10 top-1/3 font-cinzel text-[2rem] font-normal leading-[-.025] text-white sm:top-2/4 sm:text-[3.5rem] md:left-16 md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7.5rem]">
          Nasi <br className="sm:hidden" /> muzycy
        </h1>
      </div>
    </div>
    <div className="mx-auto mt-26 lg:grid lg:grid-cols-2">
      <div className="mb-10 flex flex-col items-center gap-8 border-[#0000004D] lg:mb-0 lg:items-start lg:border-b-[1.9px]">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-5 lg:ml-20 lg:items-start 2xl:ml-30">
          <h2 className="text-center font-cinzel text-3xl font-normal capitalize tracking-[-.05rem] lg:text-start lg:text-6xl">
            Koncert w obiektywie
          </h2>
          <p className="text-base lg:text-lg">
            W nastrój uwielbienia wprowadzą nas wspaniali wrocławscy muzycy:
            Orkiestra, Chór i Zespół wNieboGłosy, którzy wraz z członkami
            zespołu N.O.E. wykonają znane utwory uwielbienia, zaaranżowane przez
            Daniela Pradellę specjalnie na ten wieczór. Tak jak w poprzednich
            edycjach chórzystów poprowadzi energiczna Sara Nestorowicz, a
            orkiestrę niezastąpiony Artur Koza, do których dołączają muzycy
            N.O.E. wraz z liderem - Jackiem Geremeszem.
          </p>
          <Button
            breakpoint="lg"
            className="mt-8 px-9 uppercase lg:mb-20"
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
          Zobacz kto muzycznie inspiruje wNieboGłosy oraz prowadzi chór i
          orkiestrę.
        </p>
      </div>
      <div className="pb-4">
        <LeaderCard
          description={Sara.description}
          fbLink={Sara.fbLink}
          hideSM
          igLink={Sara.igLink}
          imageSrc={Sara.imageSrc}
          name={Sara.name}
          role={Sara.role}
          showBtn
          textLeft
        />
        <LeaderCard
          className="lg:flex-row-reverse "
          description={Artur.description}
          fbLink={Artur.fbLink}
          hideSM
          igLink={Artur.igLink}
          imageSrc={Artur.imageSrc}
          name={Artur.name}
          role={Artur.role}
          showBtn
          textLeft
        />
        <LeaderCard
          description={Jacek.description}
          fbLink={Jacek.fbLink}
          hideSM
          igLink={Jacek.igLink}
          imageSrc={Jacek.imageSrc}
          name={Jacek.name}
          role={Jacek.role}
          showBtn
          textLeft
        />
        <LeaderCard
          className="lg:flex-row-reverse"
          description={Daniel.description}
          fbLink={Daniel.fbLink}
          hideSM
          igLink={Daniel.igLink}
          imageSrc={Daniel.imageSrc}
          name={Daniel.name}
          role={Daniel.role}
          showBtn
          textLeft
        />
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl lg:grid lg:grid-cols-2">
      <div className="mb-10 flex flex-col items-center gap-8 border-[#0000004D] lg:mb-0 lg:items-start lg:border-b-[1.9px]">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-5 lg:ml-20 lg:items-start 2xl:ml-30">
          <h2 className="text-center font-cinzel text-3xl font-normal capitalize tracking-[-.05rem] text-primary lg:text-start lg:text-6xl">
            Chór
          </h2>
          <p className="text-base lg:text-lg">
            Na scenie podczas koncertu uwielbienia wNieboGłosy razem z Zespołem
            i Orkiestrą występuje także Chór. Prowadzony jest on przez Sarę
            Nestorowicz. Jeśli interesuje Cię śpiew i chcesz wspólnie wystąpić
            podczas tego wydarzenia, dołącz do chóru.
          </p>
          <Button
            breakpoint="lg"
            className="mt-10 px-9 uppercase lg:mb-20"
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
  </div>
);
export default Musicians;
