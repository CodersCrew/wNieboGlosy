'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/Button';
import _tabs from '@/public/assets/gallery/tabs.json';
import getGoogleImageID from '@/utils/getGoogleImageID';
import getYouTubeID from '@/utils/getYouTubeID';

import ImageModal from './ImageModal';

type Video = { url: string; title: string; preview: string };

const tabs = _tabs as Record<string, string[] | Video[]>;

type GalleryProps = { tab: string };

const VideoCard = ({ asset, index }: { asset: Video; index: number }) => (
  <a
    href={`https://www.youtube.com/watch?v=${getYouTubeID(asset.url)}`}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Image
      alt={`Nagranie nr ${index}`}
      className="rounded-lg"
      layout="fill"
      objectFit="cover"
      src={`https://drive.google.com/uc?export=view&id=${getGoogleImageID(
        asset.preview
      )}`}
    />
    <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-lg bg-black/70 px-5">
      <Image
        alt="Oglądaj na YouTube"
        height={70}
        src="/assets/gallery/play-round-icon.svg"
        width={70}
      />
      <div className="absolute bottom-4 left-4 max-w-[60%] font-cinzel text-sm text-white shadow-2xl md:text-2xl">
        {asset.title}
      </div>
    </div>
  </a>
);

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
    src={`https://drive.google.com/uc?export=view&id=${getGoogleImageID(
      asset
    )}`}
  />
);

const Gallery = ({ tab }: GalleryProps) => {
  const [limit, setLimit] = useState(12);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const length = tabs[tab].length;
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
        {tabs[tab].slice(0, limit).map((asset, index) => (
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
        Zobacz więcej
      </Button>
    </>
  );
};

export default Gallery;
