import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

import data from '@/public/galeria/tresc.json';

import Button from './Button';

const ImageModal = ({
  closeModal,
  index,
  show,
  tab
}: {
  closeModal: () => void;
  index: number;
  show: boolean;
  tab: string;
}) => {
  const images = (data.galeria as unknown as Record<string, string[]>)[tab];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        show
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="absolute inset-0 -z-50 bg-white/90" />
      <button
        className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-white"
        onClick={closeModal}
      >
        <Image
          alt="Zamknij galerię"
          height={32}
          src="/icons/x.svg"
          width={32}
        />
      </button>
      <Carousel
        className="relative h-[calc(100vh-240px)] w-[calc(100vw-50px)] max-w-[1440px] md:px-20 lg:w-[calc(100vw-300px)]"
        infiniteLoop
        renderArrowNext={onClickHandler => (
          <Button
            chevron
            className="absolute right-1 top-1/2 z-20 -translate-y-1/2 transform bg-white md:-right-24"
            onClick={onClickHandler}
            rightArrow
            variant="outlined"
          />
        )}
        renderArrowPrev={onClickHandler => (
          <Button
            chevron
            className="absolute left-1 top-1/2 z-20 -translate-y-1/2 transform bg-white md:-left-24"
            leftArrow
            onClick={onClickHandler}
            variant="outlined"
          />
        )}
        selectedItem={index}
        showArrows
        showIndicators={false}
        showThumbs={false}
        statusFormatter={(current, total) => `${current}/${total}`}
      >
        {images.map((imageURL, index) => (
          <div
            className="relative z-10 h-[calc(100vh-240px)] w-full"
            key={index}
          >
            <Image
              alt={`Zdjęcie z galerii nr ${index}`}
              className="rounded-lg"
              fill
              key={index}
              objectFit="contain"
              src={imageURL}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageModal;
