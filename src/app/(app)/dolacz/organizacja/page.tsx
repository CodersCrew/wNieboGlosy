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
            DOŁĄCZ DO ZESPOŁU
          </h1>
          <p className="mb-8 md:text-xl">
            Jeśli chcesz się zaangażować w organizację wydarzenia wypełnij
            formularz. Stwórz z nami unikatowe wydarzenie na mapie Wrocławia.
            Poznaj ciekawych ludzi, rozwijaj swoje talenty i przekuwaj pomysły w
            realne działania!
          </p>
          <Button
            breakpoint="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnFNLZN3LQuLYg5OFB9hp_vvnUaF3VwCSPeSKzTulqt6RB5A/viewform"
            rightArrow
            variant="contained"
          >
            ZAPISZ SIĘ
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
          content="Jeśli jesteś człowiekiem czynu, dołącz do nas jako wolontariusz - pomóż nam w dniu wydarzenia."
          href="Zapisy otwieramy w maju"
          title="ZOSTAŃ WOLONTARIUSZEM"
        />
        <Card
          buttonText="ZAPISZ SIĘ"
          content="Pomóż nam w promocji i dystrybucji materiałów - wypełnij formularz i zostań Ambasadorem wNieboGłosów."
          href="Zapisy otwieramy w marcu"
          title="ZANIEŚ ZAPROSZENIE DO SWOJEJ PARAFII"
        />
        <Card
          buttonText="DOŁĄCZ DO ZRZUTKI"
          content="Zostań naszym darczyńcą i wesprzyj nas finansowo. Każda złotówka się liczy."
          href="https://zrzutka.pl/wtpwka"
          title="JAK MOŻESZ NAM POMÓC?"
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default JoinOrganization;
