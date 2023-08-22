'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import _tabs from '/public/assets/gallery/tabs.json';
import Button from '@/components/Button';
import getGoogleImageID from '@/utils/getGoogleImageID';
import getYouTubeID from '@/utils/getYouTubeID';

import ImageModal from './ImageModal';

const tabs = _tabs as Record<string, string[]>;

type GalleryProps = {
  tab: string;
};

const Gallery = ({ tab }: GalleryProps) => {
  const [limit, setLimit] = useState(12);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const length = tabs[tab].length;
  const canShowMore = length > limit;

  return (
    <>
      {showModal && (
        <ImageModal
          closeModal={() => {
            setShowModal(false);
          }}
          index={currentImage}
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
              <a
                href={`https://www.youtube.com/watch?v=${getYouTubeID(asset)}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt={`Nagranie nr ${index}`}
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                  src={`https://img.youtube.com/vi/${getYouTubeID(
                    asset
                  )}/0.jpg`}
                />
                <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-lg bg-black/50 px-5">
                  <div className="text-center font-cinzel text-xl text-white md:text-4xl">
                    Zobacz nagranie na YouTube
                  </div>
                  <p className="mt-2 flex items-center justify-center gap-2 rounded-full border border-primary bg-white px-8 py-2 font-raleway text-base font-medium  text-primary">
                    Oglądaj
                    <Image
                      alt="Oglądaj na YouTube"
                      height={24}
                      src="/assets/gallery/go-yt-icon.svg"
                      width={24}
                    />
                  </p>
                </div>
              </a>
            ) : (
              <Image
                alt={`Zdjęcie z galerii nr ${index}`}
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                onClick={() => {
                  setCurrentImage(index + 1);
                  setShowModal(true);
                }}
                src={`https://drive.google.com/uc?export=view&id=${getGoogleImageID(
                  asset
                )}`}
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
