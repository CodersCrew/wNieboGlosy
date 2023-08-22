import Link from 'next/link';
import React from 'react';

import _tabs from '/public/assets/gallery/tabs.json';
import Button from '@/components/Button';
import Gallery from '@/components/Gallery';

const tabs = _tabs as Record<string, string[]>;

type GalleryPageProps = {
  params: {
    tab?: string;
  };
};

const GalleryPage = ({ params }: GalleryPageProps) => {
  const tabNames = Object.keys(tabs);
  const currentTab = params.tab ?? tabNames[tabNames.length - 1];

  const tabIndex = tabNames.indexOf(currentTab);
  const hasNextTab = tabIndex < tabNames.length - 1;
  const hasPreviousTab = tabIndex > 0;

  return (
    <div className="m-auto flex w-full max-w-[1440px] flex-col place-content-center items-center justify-center pt-18 lg:pt-[101px]">
      <div
        className="flex min-h-[300px] w-full items-center justify-start bg-contain bg-center bg-no-repeat p-4"
        style={{ backgroundImage: "url('/assets/gallery/gallery-banner.svg')" }}
      >
        <h1 className="relative bottom-14 w-full pl-2 font-cinzel text-5xl uppercase tracking-wide md:static md:pl-10 md:text-6xl lg:pl-20 lg:text-8xl">
          Galeria
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-0 sm:p-4">
        <div className="flex flex-col flex-wrap justify-start gap-2 p-3 md:flex-row md:items-center md:justify-center md:gap-4 md:p-10">
          <p className="font-cinzel text-xl md:text-2xl lg:text-3xl">Edycja</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabNames.map(tab => (
              <Link href={`/galeria/${tab}`} key={tab}>
                <Button variant={currentTab === tab ? 'contained' : 'outlined'}>
                  {tab}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <Gallery tab={currentTab} />
        <div className="flex w-full flex-wrap items-center justify-between px-6 py-2 md:py-10">
          <Button
            className={hasPreviousTab ? '' : 'pointer-events-none opacity-0'}
            href={`/galeria/${tabNames[tabIndex - 1]}`}
            leftArrow
            variant="outlined"
          >
            {tabNames[tabIndex - 1]}
          </Button>
          <Button
            className={hasNextTab ? '' : 'pointer-events-none opacity-0'}
            href={`/galeria/${tabNames[tabIndex + 1]}`}
            rightArrow
            variant="outlined"
          >
            {tabNames[tabIndex + 1]}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
