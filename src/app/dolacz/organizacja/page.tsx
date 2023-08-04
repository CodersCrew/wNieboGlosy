import Image from 'next/image';

import Button from '@/components/Button';
import Card from '@/components/Card';

const JoinOrganization = () => (
  <div className="bg-gradient min-h-screen">
    <div className="mx-auto max-w-3xl px-5 pt-18 lg:max-w-[1440px] lg:px-30">
      <div className="flex flex-col items-center gap-8 py-10 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="mb-4 text-center font-cinzel text-2.5xl md:text-6.5xl lg:text-left">
            JAK MOŻESZ NAM POMÓC?
          </h1>
          <p className="mb-8 font-raleway text-base md:text-xl">
            Stwórz z nami unikatowe wydarzenie na mapie Wrocławia. Poznaj
            ciekawych ludzi, rozwijaj swoje talenty i przekuwaj pomysły w realne
            działania!
          </p>
          <Button breakpoint="lg" rightArrow variant="contained">
            DOŁĄCZ DO ZRZUTKI
          </Button>
        </div>
        <div className="relative h-[310px] w-full max-w-[450px] lg:h-[600px]">
          <Image
            alt="Siostra zakonna przytulająca osobę"
            className="rounded-lg object-cover"
            fill
            src="/assets/dolacz/organizacja.png"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 py-10 lg:gap-3">
        <Card
          buttonText="ZAPISZ SIĘ"
          content="Jeśli jesteś człowiekiem czynu, dołącz do nas jako wolontariusz - pomóż nam w dniu koncertu."
          title="ZOSTAŃ WOLONTARIUSZEM"
        />
        <Card
          buttonText="ZAPISZ SIĘ"
          content="Pomóż nam w promocji i dystrybucji materiałów - wypełnij formularz i zostań Ambasadorem wNieboGłosów."
          title="ZANIEŚ ZAPROSZENIE DO SWOJEJ PARAFII"
        />
        <Card
          buttonText="ZAPISZ SIĘ"
          content="Jeśli chcesz się zaangażować w organizację wydarzenia wypełnij formularz."
          title="DOŁĄCZ DO ZESPOŁU ORGANIZACYJNEGO"
        />
      </div>
    </div>
  </div>
);

export default JoinOrganization;
