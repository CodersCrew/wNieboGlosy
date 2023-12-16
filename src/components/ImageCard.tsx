import Image from 'next/image';

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
}) => (
  <Image
    alt={`Zdjęcie z galerii nr ${index}`}
    className="rounded-lg"
    layout="fill"
    objectFit="cover"
    onClick={() => {
      setCurrentImage(index);
      setShowModal(true);
    }}
    src={asset}
  />
);

export default ImageCard;
