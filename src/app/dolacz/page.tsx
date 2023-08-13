import Image from 'next/legacy/image';

import Button from '@/components/Button';

const Join = () => {
  return (
    <div className="bg-linear mx-auto max-w-7xl px-5 font-raleway md:px-10">
      <div className="mb-10 mt-5 text-center">
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
            height={400}
            layout="responsive"
            src="/assets/dolacz/chór.jpeg"
            width={600}
          />
        </div>
        <div className="text-center text-primary md:w-3/5 md:self-center md:text-left">
          <h2 className="mb-4 text-2xl font-normal uppercase leading-8 md:mb-6 md:text-4xl">
            Zaśpiewaj w chórze
          </h2>
          <p className="mb-8 font-light md:mb-12 md:text-lg">
            Serdecznie zapraszamy do współtworzenia Chóru, który wystąpi na
            scenie podczas wydarzenia uwielbienia wNieboGłosy razem z Zespołem i
            Orkiestrą.
          </p>
          <Button href="/dolacz/zaspiewaj" rightArrow variant="outlined">
            Dowiedz się więcej
          </Button>
        </div>
      </div>

      <div className="mb-10 flex flex-col-reverse md:flex-row md:gap-10">
        <div className="md:w-2/5">
          <Image
            alt="chór"
            height={400}
            layout="responsive"
            src="/assets/dolacz/pomoc.png"
            width={600}
          />
        </div>
        <div className="text-center text-primary md:w-3/5 md:self-center md:text-left">
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
          <Button href="/dolacz/organizacja" rightArrow variant="contained">
            Dowiedz się więcej
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Join;
