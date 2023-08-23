import Image from 'next/image';

import Button from '@/components/Button';
import Footer from '@/components/Footer';

const Join = () => (
  <div>
    <div className="relative h-[360px] w-full overflow-hidden lg:h-[675px]">
      <Image
        alt="Grupa wNieboGłosy"
        className="object-cover"
        fill
        src="/assets/dolacz/naglowek.png"
      />
      <div className="absolute -left-24 bottom-0 z-10 h-[220px] w-[1024px] md:-left-6 lg:-bottom-30 lg:h-full lg:w-[calc(100%+16px)]">
        <Image
          alt="Grupa wNieboGłosy"
          className="object-contain"
          fill
          src="/assets/dolacz/header-note.svg"
        />
      </div>
      <div className="header-gradient absolute inset-0 opacity-80" />
      <div className="header-shadow absolute inset-0" />
      <p className="relative right-5 top-2/3 z-10 ml-auto w-[70%] -translate-y-1/2 font-cinzel text-4.5xl text-white lg:right-40 lg:top-1/2 lg:text-[120px]">
        DOŁĄCZ DO NAS
      </p>
    </div>
    <div className="bg-linear mx-auto max-w-7xl px-5 pt-18 font-raleway md:px-10 lg:pt-[101px]">
      <div className="mb-10 mt-5 text-center md:text-2xl">
        <p>Chcesz zrobić coś dobrego i szukasz miejsca dla siebie?</p>
        <p>
          A może chcesz wziąć udział w warsztatach wokalnych i zaśpiewać wraz z
          naszym chórem?
        </p>
        <b>Dołącz do nas!</b>
      </div>
      <div className="mb-20 flex flex-col-reverse md:flex-row md:gap-10">
        <div className="md:w-2/5">
          <Image
            alt="chór"
            className="rounded-lg"
            height={400}
            layout="responsive"
            src="/assets/dolacz/chór.jpeg"
            width={600}
          />
        </div>
        <div className="text-center text-primary md:flex md:w-3/5 md:flex-col md:items-start md:self-center md:text-left">
          <h2 className="mb-4 text-2xl font-normal uppercase leading-8 md:mb-6 md:text-4xl">
            Zaśpiewaj w chórze
          </h2>
          <p className="mb-8 font-light md:mb-12 md:text-lg">
            Serdecznie zapraszamy do współtworzenia Chóru, który wystąpi na
            scenie podczas wydarzenia uwielbienia wNieboGłosy razem z Zespołem i
            Orkiestrą.
          </p>
          <Button
            className="mb-8 md:mb-0"
            href="/dolacz/zaspiewaj"
            rightArrow
            variant="outlined"
          >
            Dowiedz się więcej
          </Button>
        </div>
      </div>
      <div className="mb-10 flex flex-col-reverse md:flex-row md:gap-10">
        <div className="md:w-2/5">
          <Image
            alt="chór"
            className="rounded-lg"
            height={400}
            layout="responsive"
            src="/assets/dolacz/pomoc.svg"
            width={600}
          />
        </div>
        <div className="text-center text-primary md:flex md:w-3/5 md:flex-col md:items-start md:self-center md:text-left">
          <h2 className="mb-4 text-2xl font-normal uppercase leading-8 md:mb-6 md:text-4xl">
            Pomóż w organizacji
          </h2>
          <p className="mb-8 font-light md:mb-12 md:text-lg">
            Pragniemy, aby wNieboGłosy stały się okazją do wspólnego, radosnego
            świętowania, by były przestrzenią spotkania, zachętą, aby wejść
            głębiej w doświadczenie Bożej obecności, żeby rozbudzić na nowo
            wiarę, Naszym marzeniem jest to, aby wNieboGłosy na stałe wpisały
            się w kalendarz wrocławian i mieszkańców naszej archidiecezji.
          </p>
          <Button
            className="mb-8 md:mb-0"
            href="/dolacz/organizacja"
            rightArrow
            variant="contained"
          >
            Dowiedz się więcej
          </Button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Join;
