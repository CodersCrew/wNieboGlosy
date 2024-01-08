import Image from 'next/image';
import { useState } from 'react';

const ImageCard = ({
  asset,
  index,
  setCurrentImage,
  setShowModal
}: {
  asset: string;
  index: number;
  setCurrentImage: (index: number) => void;
  setShowModal: (show: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <div className="flex h-full w-full animate-pulse items-center justify-center rounded bg-[gray]/10">
          <svg
            aria-hidden="true"
            className="h-10 w-10 text-[gray]"
            fill="currentColor"
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}
      <Image
        alt={`Zdjęcie z galerii nr ${index}`}
        className="rounded-lg"
        layout="fill"
        objectFit="cover"
        onClick={() => {
          setCurrentImage(index);
          setShowModal(true);
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
        src={asset}
      />
    </>
  );
};

export default ImageCard;
