import Image from 'next/image';

import checkIcon from '@/public/icons/check.webp';

type CheckContainterProps = {
  content: string;
};

const CheckContainer = ({ content }: CheckContainterProps) => (
  <span className="mb-6 grid grid-cols-[max-content_1fr] items-center font-raleway text-base font-light">
    <Image alt={content} src={checkIcon} />
    <p className="ml-2">{content}</p>
  </span>
);

export default CheckContainer;
