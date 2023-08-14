import Image from 'next/image';

import Button from '@/components/Button';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center">
        <div className="relative h-[360px] w-full overflow-hidden lg:h-[728px]">
          <Image
            alt="Grupa wNieboGłosy"
            className="object-cover"
            fill
            src="/assets/o-nas/header.png"
          />
          <div className="absolute -right-64 top-1/3 z-10 h-[171px] w-[1024px] scale-75 sm:right-0 sm:scale-100 lg:top-1/2 lg:w-full lg:-translate-y-1/2 lg:scale-105">
            <Image
              alt="nuta"
              className="object-contain"
              fill
              src="/assets/o-nas/note.svg"
            />
          </div>
          <h1 className="relative left-7 top-1/2 z-10 w-4/6 -translate-y-1/2 font-cinzel text-4.5xl capitalize leading-[3rem] text-white lg:left-[120px] lg:top-[37%] lg:text-[120px] lg:leading-normal">
            Kim jesteśmy?
          </h1>
          <div className="header-gradient absolute inset-0 opacity-80" />
          <div className="header-shadow absolute inset-0" />
        </div>

        <div className="mt-10 px-5 lg:mt-12 lg:px-30">
          <h2 className="text-center font-cinzel text-2xl lg:mb-2 lg:text-5xl">
            Niech będzie pochwalony Jezus Chrystus!
          </h2>
          <p className="text-center font-raleway lg:text-3xl">
            Tymi słowami zawsze rozpoczynamy spotkanie w czerwcowy wieczór,
            zaznaczając jego cel: chcemy wspólne wielbić Pana.
          </p>
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-5 py-10 lg:flex-row lg:gap-7 lg:px-30 lg:py-[6.5rem]">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="mb-4 font-cinzel text-2.5xl uppercase lg:mb-6 lg:text-6.5xl">
              Nasza historia
            </h2>
            <p className="font-raleway lg:text-xl">
              Po raz pierwszy spotkaliśmy się 15 czerwca 2017 roku – w 20
              rocznicę Międzynarodowego Kongresu Eucharystycznego – na placu
              Wolności we Wrocławiu. Naszą ideą było modlitwa wyrażona muzyką.
              Niezwykle pozytywny odbiór pierwszego wydarzenia oraz fenomen
              koncertów, które rozbrzmiewają w Boże Ciało w wielu miastach
              Polski, zainspirował nas do kontynuowania tej tradycji.
              Inicjatywie od początku towarzyszy patronat Arcybiskupa Józefa
              Kupnego, a w organizację angażują się wrocławskie wspólnoty
              katolickie.
            </p>
            <div className="mt-8 lg:mt-12">
              <Button
                breakpoint="lg"
                className="uppercase"
                rightArrow
                variant="outlined"
              >
                Zobacz galerię
              </Button>
            </div>
          </div>
          <div className="min-w-[320px] lg:flex-[0_0_52%]">
            <Image
              alt="Grupa wNieboGłosy"
              className="rounded-lg"
              height={471}
              layout="responsive"
              src="/assets/o-nas/history.png"
              width={628}
            />
          </div>
        </div>
        <div className=" mx-auto flex w-full flex-col items-center justify-center gap-8 border-b bg-bg-secondary px-5 py-10 lg:flex-row-reverse lg:gap-7 lg:border-b-[1.5px] lg:border-[#0000004D] lg:px-30 lg:py-[6.5rem]">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="mb-4 font-cinzel text-2.5xl uppercase lg:mb-6 lg:text-6.5xl">
              O wydarzeniu
            </h2>
            <p className="font-raleway lg:text-xl">
              Podczas tego wieczoru ze sceny płyną dźwięki najpiękniejszych
              pieśni chwały w wykonaniu Orkiestry, Chóru i Zespołu wNieboGłosy
              oraz zespołu N.O.E., w aranżacji Daniela Pradelli - jest to
              wspaniała uczta nie tylko dla ucha, ale także dla duszy!
            </p>
            <div className="mt-8 lg:mt-12">
              <Button
                breakpoint="lg"
                className="uppercase"
                rightArrow
                variant="outlined"
              >
                Nasi muzycy
              </Button>
            </div>
          </div>
          <div className="min-w-[320px] lg:flex-[0_0_52%]">
            <Image
              alt="Kobiety grające na skrzypcach"
              className="rounded-lg"
              height={471}
              layout="responsive"
              src="/assets/o-nas/concert.png"
              width={628}
            />
          </div>
        </div>
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-5 py-10 lg:flex-row lg:gap-7 lg:px-30 lg:py-[6.5rem]">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="mb-4 font-cinzel text-2.5xl uppercase lg:mb-6 lg:text-6.5xl">
              Nasza misja
            </h2>
            <p className="font-raleway lg:text-xl">
              Pragniemy, aby wNieboGłosy stały się okazją do wspólnego,
              radosnego świętowania, by były przestrzenią spotkania, zachętą,
              aby wejść głębiej w doświadczenie Bożej obecności, żeby rozbudzić
              na nowo wiarę, Naszym marzeniem jest to, aby wNieboGłosy na stałe
              wpisały się w kalendarz wrocławian i mieszkańców naszej
              archidiecezji.
            </p>
            <div className="mt-8 lg:mt-12">
              <Button
                breakpoint="lg"
                className="uppercase"
                rightArrow
                variant="contained"
              >
                Wesprzyj nas
              </Button>
            </div>
          </div>
          <div className="min-w-[320px] lg:flex-[0_0_52%]">
            <Image
              alt="Ręce obejmujące gołębia"
              height={471}
              layout="responsive"
              src="/assets/o-nas/hands.png"
              width={628}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
