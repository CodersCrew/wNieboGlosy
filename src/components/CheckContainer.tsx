import Image from 'next/image';

const CheckContainer = ({ content }: { content: string }) => (
  <span className="mb-6 grid grid-cols-[max-content_1fr] items-center font-raleway text-base font-light">
    <Image alt={content} height={20} src="/icons/check.webp" width={20} />
    <p className="ml-2">{content}</p>
  </span>
);

export default CheckContainer;
