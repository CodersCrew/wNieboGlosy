import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

import Button from '@/components/Button';
import {
  fetchGalleryImages,
  type GalleryImage
} from '@/utils/fetchGalleryImages';

const GalleryPage = async ({ params }: { params: { year: string } }) => {
  const { images, uniqueYearsArray } = await fetchGalleryImages();
  const year: number = params.year
    ? parseInt(params.year)
    : Math.max(...uniqueYearsArray);

  const yearIndex = uniqueYearsArray.indexOf(year);

  const yearExistAtIndex = (index: number) =>
    index >= 0 && index < uniqueYearsArray.length;

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1440px] flex-col place-content-center items-center justify-center">
        <div
          className="flex min-h-[300px] w-full items-center justify-start bg-contain bg-center bg-no-repeat p-4"
          style={{
            backgroundImage: "url('/assets/gallery/gallery-banner.svg')"
          }}
        >
          <h2 className="relative bottom-14 w-full pl-2 font-cinzel text-5xl uppercase tracking-wide md:static md:pl-10 md:text-6xl lg:pl-20 lg:text-8xl">
            Galeria
          </h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center p-0 sm:p-4">
          <div className="flex w-full flex-wrap items-center  justify-between p-1 md:p-10">
            <div className="items:start flex flex-col flex-wrap justify-start gap-2 p-2 md:flex-row md:items-center md:justify-center md:gap-4 md:p-0 ">
              <h3 className="font-cinzel text-xl md:text-2xl lg:text-3xl">
                Edycja
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {Array.isArray(uniqueYearsArray) &&
                  uniqueYearsArray.map(uniqueYear => (
                    <Link
                      href={`/galeria/${uniqueYear}`}
                      key={`link-${uniqueYear}`}
                    >
                      <Button
                        key={`button-${uniqueYear}`}
                        variant={uniqueYear === year ? 'contained' : 'outlined'}
                      >
                        {uniqueYear.toString()}
                      </Button>
                    </Link>
                  ))}
              </div>
            </div>
            <Image
              alt="gallery"
              className="hidden md:block"
              height={56}
              src="/assets/gallery/grid-layout-icon.svg"
              width={56}
            />
          </div>
          {Array.isArray(images[year]) && images[year].length > 0 ? (
            generateRow(images[year])
          ) : (
            <p className="text-red-500">No images available for {year}!</p>
          )}
          <div
            className={`${
              yearExistAtIndex(yearIndex - 1) && yearExistAtIndex(yearIndex + 1)
                ? 'justify-between'
                : yearExistAtIndex(yearIndex + 1)
                ? 'justify-end'
                : 'justify-start'
            } flex
              w-full flex-wrap
          items-center px-6 py-2 md:py-10`}
          >
            {yearExistAtIndex(yearIndex - 1) ? (
              <Link
                href={`/galeria/${uniqueYearsArray[yearIndex - 1]}`}
                key={`footer-link-${year - 1}`}
              >
                <Button
                  key={`footer-button-${yearIndex - 1}`}
                  leftArrow
                  variant="outlined"
                >
                  {uniqueYearsArray[yearIndex - 1].toString()}
                </Button>
              </Link>
            ) : null}
            {yearExistAtIndex(yearIndex + 1) ? (
              <Link
                href={`/galeria/${uniqueYearsArray[yearIndex + 1]}`}
                key={`footer-link-${year + 1}`}
              >
                <Button
                  key={`footer-button-${yearIndex + 1}`}
                  rightArrow
                  variant="outlined"
                >
                  {uniqueYearsArray[yearIndex + 1].toString()}
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const generateRow = (images: GalleryImage[]) => {
  return (
    <Fragment>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4 md:gap-8">
          {Array.isArray(images) &&
            images.map((image, index) => (
              <div
                className={`relative h-[152px] max-h-[436px] w-full cursor-pointer md:h-[436px] ${
                  image.imageUrl.includes('youtube-preview') ||
                  index === 8 ||
                  index === 11
                    ? 'max-w-[320px] md:max-w-[900px]'
                    : 'max-w-[152px] md:max-w-[436px]'
                } rounded-lg`}
                key={index}
              >
                <Image
                  alt={`Image ${index}`}
                  className="transform rounded-lg transition-transform duration-300 hover:scale-105"
                  layout="fill"
                  objectFit="cover"
                  src={image.imageUrl}
                />
                {image.imageUrl.includes('youtube-preview') && (
                  <div className="absolute inset-0 mx-auto flex max-w-[415px] cursor-pointer flex-col items-center justify-center">
                    <div className="text-center font-cinzel text-xl text-white md:text-4xl">
                      Zobacz naszą relację na YouTube
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="mt-2 flex items-center justify-center gap-2 rounded-full border border-primary bg-white px-8 py-2 font-raleway text-base font-medium  text-primary">
                        Oglądaj
                        <Image
                          alt=""
                          height={24}
                          src={'/assets/gallery/go-yt-icon.svg'}
                          width={24}
                        />
                      </button>
                    </a>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <Button variant="contained">Zobacz więcej</Button>
      </div>
    </Fragment>
  );
};

export default GalleryPage;
