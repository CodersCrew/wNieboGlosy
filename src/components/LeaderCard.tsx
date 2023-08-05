import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

import fbIcon from '@/public/assets/icons/facebook-dark.svg';
import igIcon from '@/public/assets/icons/instagram-dark.svg';

type LeaderCardProps = {
  imageSrc: StaticImageData;
  name: string;
  role: string;
  description: string;
  fbLink: string;
  igLink: string;
  direction?: boolean;
};

const LeaderCard = ({
  imageSrc,
  name,
  role,
  description,
  fbLink,
  igLink,
  direction
}: LeaderCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center  lg:flex-row${
        direction ? '-reverse' : ''
      } lg:gap-x-10`}
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

        <p className="max-w-sm px-5 text-center font-raleway text-base font-light lg:max-w-md lg:px-0  lg:text-left lg:text-xl lg:font-normal lg:leading-8">
          {description}
        </p>
        <div className="flex items-center gap-4">
          <Link href={fbLink} target="blank">
            <Image alt="Ikona facebooka" src={fbIcon as string} />
          </Link>
          <Link href={igLink} target="blank">
            <Image alt="Ikona instagrama" src={igIcon as string} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
