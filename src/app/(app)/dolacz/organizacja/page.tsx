import Image from 'next/image';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

const JoinOrganization = () => (
  <div className="bg-gradient min-h-screen">
    <div className="mx-auto max-w-3xl px-5 pt-18 lg:max-w-[1440px] lg:px-30 lg:pt-[101px]">
      <div className="flex flex-col items-center gap-8 py-10 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="mb-4 text-center font-cinzel text-2.5xl md:text-6.5xl lg:text-left">
            JAK MOŻESZ NAM POMÓC?
          </h1>
          <p className="mb-8 md:text-xl">
            Stwórz z&nbsp;nami unikatowe wydarzenie na mapie Wrocławia. Poznaj
            ciekawych ludzi, rozwijaj swoje talenty i&nbsp;przekuwaj pomysły
            w&nbsp;realne działania!
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
          content="Jeśli jesteś człowiekiem czynu, dołącz do nas jako wolontariusz&nbsp;-&nbsp;pomóż nam w&nbsp;dniu wydarzenia."
          href="Zapisy otwieramy w maju"
          title="ZOSTAŃ WOLONTARIUSZEM"
        />
        <Card
          buttonText="ZAPISZ SIĘ"
          content="Pomóż nam w promocji i&nbsp;dystrybucji materiałów&nbsp;-&nbsp;wypełnij formularz i&nbsp;zostań Ambasadorem wNieboGłosów."
          href="Zapisy otwieramy w marcu"
          title="ZANIEŚ ZAPROSZENIE DO SWOJEJ PARAFII"
        />
        <Card
          buttonText="ZAPISZ SIĘ"
          content="Jeśli chcesz się zaangażować w&nbsp;organizację wydarzenia wypełnij formularz."
          href="https://forms.gle/sYPpFRKTDR782NEH9"
          title="DOŁĄCZ DO ZESPOŁU ORGANIZACYJNEGO"
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default JoinOrganization;
