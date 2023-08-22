import isURL from '@/utils/isURL';

import Button from './Button';

type CardProps = {
  content: string;
  buttonText: string;
  href: string;
  title: string;
};

const Card = ({ content, buttonText, href, title }: CardProps) => (
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
      {isURL(href) ? buttonText : href}
    </Button>
  </div>
);

export default Card;
