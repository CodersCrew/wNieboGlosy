'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/Button';

type LeaderCardProps = {
  imageSrc: StaticImageData;
  name: string;
  role: string;
  description: string;
  className?: string;
  withButton?: boolean;
  textLeft?: boolean;
};

const LeaderCard = ({
  imageSrc,
  name,
  role,
  description,
  className,
  withButton,
  textLeft = false
}: LeaderCardProps) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center pb-20 lg:flex-row lg:items-start lg:gap-x-10',
        className
      )}
    >
      <Image
        alt={name}
        className="h-[250px] w-[250px] rounded-full object-cover lg:h-[500px] lg:w-[500px]"
        src={imageSrc}
      />
      <div className="flex flex-col items-center gap-y-6 lg:ml-10 lg:items-start ">
        <div className="my-6">
          <h3 className="text-center font-cinzel text-2xl font-normal tracking-[-.4px] text-border lg:text-left lg:text-[40px]">
            {name}
          </h3>
          <p className="hidden font-raleway text-base lg:block">{role}</p>
        </div>
        <p
          className={twMerge(
            'line-clamp-[7] max-w-sm whitespace-pre-line px-5 text-center font-raleway text-base font-light lg:max-w-md lg:px-0 lg:text-left lg:text-xl lg:font-normal lg:leading-8',
            readMore && 'line-clamp-none',
            textLeft && 'text-left'
          )}
        >
          {description}
        </p>
        {withButton && (
          <Button
            breakpoint="md"
            className="md:px-0"
            onClick={() => {
              setReadMore(prev => !prev);
            }}
          >
            {readMore ? 'Zwiń' : 'Czytaj więcej'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default LeaderCard;
