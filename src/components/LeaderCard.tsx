import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/Button';

type LeaderCardProps = {
  imageSrc: StaticImageData;
  name: string;
  role: string;
  description: string;
  className?: string;
  showBtn?: boolean;
  textLeft?: boolean;
};

const LeaderCard = ({
  imageSrc,
  name,
  role,
  description,
  className,
  showBtn,
  textLeft = false
}: LeaderCardProps) => {
  const [readMore, setReadMore] = useState(false);
  const readMoreHandle = () => {
    setReadMore(prev => !prev);
  };
  return (
    <div
      className={`flex flex-col items-center justify-center pb-20 lg:flex-row
      lg:items-start lg:gap-x-10 ${className}`}
    >
      <Image
        alt={name}
        className="h-[250px] w-[250px] rounded-full object-cover  lg:h-[500px] lg:w-[500px]"
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
          className={`whitespace-pre-line ${
            readMore ? 'line-clamp-none' : 'line-clamp-[7]'
          } max-w-sm px-5 ${
            textLeft ? 'text-left' : 'text-center'
          } font-raleway text-base font-light lg:max-w-md  lg:px-0 lg:text-left lg:text-xl lg:font-normal lg:leading-8`}
        >
          {description}
        </p>
        <Button
          breakpoint="md"
          className={`${showBtn ? 'block' : 'hidden'} md:px-0`}
          onClick={readMoreHandle}
        >
          {readMore ? 'Zwiń' : 'Czytaj więcej'}
        </Button>
      </div>
    </div>
  );
};

export default LeaderCard;
