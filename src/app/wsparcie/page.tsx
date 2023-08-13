import Image from 'next/image';

import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Footer from '@/components/Footer';

const Support = () => (
  <div className="min-h-screen">
    <div className="relative h-[360px] w-full overflow-hidden lg:h-[675px]">
      <Image
        alt="Grupa wNieboGłosy"
        className="object-cover"
        fill
        src="/assets/wsparcie/naglowek.png"
      />
      <div className="absolute -right-40 bottom-0 z-10 h-[220px] w-[1024px] md:right-0 lg:-bottom-40 lg:h-full lg:w-[calc(100%+16px)]">
        <Image
          alt="Grupa wNieboGłosy"
          className="object-contain"
          fill
          src="/assets/wsparcie/naglowek-ikona.svg"
        />
      </div>
      <div className="header-gradient absolute inset-0 opacity-80" />
      <div className="header-shadow absolute inset-0" />
      <p className="relative left-5 top-1/2 z-10 w-4/6 -translate-y-1/2 font-cinzel text-4.5xl text-white lg:left-40 lg:text-[120px]">
        WESPRZYJ NAS
      </p>
    </div>
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-5 py-15 lg:max-w-[1440px] lg:flex-row lg:px-[155px] lg:py-30">
      <div className="flex flex-col gap-6 lg:flex-1">
        <p className="text-xl font-medium">
          W pierwszej kolejności prosimy Was o wsparcie modlitewne, aby ta
          inicjatywa przynosiła dobre owoce, a nasza wspólna modlitwa niosła
          Uwielbienie!
        </p>
        <p>
          Organizacja wydarzenia opiera się na pracy wielu wolontariuszy. Dla
          zapewnienia bezpieczeństwa uczestników i profesjonalnej infrastruktury
          niezbędne są środki finansowe.
        </p>
      </div>
      <div className="relative m-auto h-[250px] w-full max-w-[410px] lg:h-[410px] lg:flex-1">
        <Image
          alt="Otwarte do siebie ręce"
          className="rounded-lg object-contain"
          fill
          src="/assets/wsparcie/grafika1.png"
        />
      </div>
    </div>
    <div className="bg-gradient">
      <div className="mx-auto flex max-w-xl flex-col gap-26 py-15 lg:max-w-[1440px]">
        <div className="flex flex-col gap-16 px-5 lg:flex-row lg:px-[155px]">
          <div className="flex flex-col items-center gap-8 lg:gap-15">
            <div className="flex flex-col gap-6">
              <p className="font-cinzel text-2.5xl lg:text-6xl">
                DOŁĄCZ DO ZRZUTKI
              </p>
              <p className="lg:text-xl">
                Dołączając do zrzutki możesz ofiarować nam swoją pomoc w łatwy i
                wygodny sposób.
              </p>
              <p className="text-xl underline">Jak działa zrzutka?</p>
            </div>
            <Button breakpoint="lg" rightArrow variant="contained">
              PRZEJDŹ DO ZRZUTKI
            </Button>
          </div>
          <div className="flex flex-col items-center gap-8 lg:gap-15">
            <div className="flex flex-col gap-6">
              <p className="font-cinzel text-2.5xl lg:text-6xl">
                PRZEKAŻ 1% PODATKU
              </p>
              <p className="lg:text-xl">
                Możesz nas także wspomóc przekazując 1% podatku. Wystarczy, że w
                PIT wpiszesz nasz numer KRS.
              </p>
              <p className="text-xl underline">Jak przekazać 1%?</p>
            </div>
            <p className="font-cinzel text-3xl lg:text-4.5xl">
              KRS: 0000575737
            </p>
          </div>
        </div>
        <div className="px-2.5 lg:px-18">
          <Banner />
        </div>
      </div>
    </div>
    <div className="py-15 text-center font-cinzel lg:px-48">
      <p className="m-auto mb-2 max-w-[340px] text-xl leading-snug lg:max-w-[540px] lg:text-[32px]">
        DZIĘKUJEMY ZA TWOJE WSPARCIE I DOBRE SERCE!
      </p>
      <p className="text-2xl lg:text-5xl">BÓG ZAPŁAĆ</p>
      <div className="relative h-40 w-full lg:h-[350px]">
        <Image
          alt="Siedząca grupa ludzi trzymająca się za ramiona"
          className="object-contain"
          fill
          src="/assets/wsparcie/grafika2.png"
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default Support;
