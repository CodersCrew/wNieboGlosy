'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import data from '@/public/galeria/tresc.json';

import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import VideoCard from './VideoCard';

type Video = { url: string; title: string; preview: string };
const galeria = data.galeria as unknown as Record<string, string[] | Video[]>;

const Gallery = ({ tab }: { tab: string }) => {
  const [limit, setLimit] = useState(12);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const length = galeria[tab].length;
  const canShowMore = length > limit;

  return (
    <>
      {tab !== 'nagrania' && (
        <ImageModal
          closeModal={() => {
            setShowModal(false);
          }}
          index={currentImage}
          show={showModal}
          tab={tab}
        />
      )}
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4 md:gap-8">
        {galeria[tab].slice(0, limit).map((asset, index) => (
          <div
            className={`relative h-[152px] max-h-[436px] w-full cursor-pointer transition-transform duration-300 hover:scale-105 md:h-[436px] ${
              index % 10 === 0 || (index - 6) % 10 === 0
                ? 'max-w-[320px] md:max-w-[900px]'
                : 'max-w-[152px] md:max-w-[436px]'
            }`}
            key={index}
          >
            {tab === 'nagrania' ? (
              <VideoCard asset={asset as Video} index={index} />
            ) : (
              <ImageCard
                asset={asset as string}
                index={index}
                setCurrentImage={setCurrentImage}
                setShowModal={setShowModal}
              />
            )}
          </div>
        ))}
      </div>
      <Button
        className={`m-8 ${canShowMore ? '' : 'hidden'}`}
        onClick={() => {
          setLimit(limit => limit + 12);
        }}
        variant="contained"
      >
        {data.tekstPrzyciskLadowania}
      </Button>
    </>
  );
};

export default Gallery;
