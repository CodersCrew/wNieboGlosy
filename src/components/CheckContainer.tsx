import Image from 'next/image';

import checkIcon from '@/public/assets/icons/ant-design_check-circle-outlined.png';

type CheckContainterProps = {
  content: string;
};

const CheckContainer = ({ content }: CheckContainterProps) => {
  return (
    <span className="mb-6 grid grid-cols-[max-content_1fr] items-center font-raleway text-base font-light">
      <Image alt="Okrągła check ikona" src={checkIcon} />
      <p className="ml-2">{content}</p>
    </span>
  );
};

export default CheckContainer;
