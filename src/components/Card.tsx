import Button from './Button';

type CardProps = {
  title: string;
  content: string;
  buttonText: string;
};

const Card = ({ title, content, buttonText }: CardProps) => {
  return (
    <div className="flex w-80 flex-col justify-between rounded-[40px] bg-white px-6 py-12 shadow-lg lg:w-97.5">
      <p className="mb-4 text-center font-cinzel text-2.5xl tracking-[-1px] lg:mb-6">
        {title}
      </p>
      <p className="mb-4 text-center font-raleway text-base lg:mb-8 lg:text-xl">
        {content}
      </p>
      <Button breakpoint="lg" rightArrow variant="outlined">
        {buttonText}
      </Button>
    </div>
  );
};

export default Card;
