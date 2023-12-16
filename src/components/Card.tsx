import isURL from '@/utils/isURL';

import Button from './Button';

const Card = ({
  content,
  buttonText,
  href,
  title
}: {
  content: string;
  buttonText: string;
  href: string;
  title: string;
}) => (
  <div className="flex w-80 flex-col justify-between rounded-[40px] bg-white px-6 py-12 shadow-lg sm:w-97.5">
    <p className="mb-4 text-center font-cinzel text-2.5xl tracking-[-1px] lg:mb-6">
      {title}
    </p>
    <p className="mb-4 text-center sm:mb-8 sm:text-xl">{content}</p>
    <Button
      breakpoint="lg"
      disabled={!isURL(href)}
      href={isURL(href) ? href : undefined}
      rightArrow={isURL(href)}
      variant="outlined"
    >
      {buttonText}
    </Button>
  </div>
);

export default Card;
