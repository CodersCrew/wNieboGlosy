import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import arrow from '@/public/assets/icons/arrow.svg';

const variants = {
  contained: 'bg-primary font-medium text-white',
  outlined: 'border border-border bg-transparent font-medium',
  text: 'gap-1 px-0 font-semibold text-primary decoration-primary underline-offset-4 hover:underline'
};

const sizes = {
  desktop: 'gap-4 px-8 py-3 text-xl',
  mobile: 'gap-3 px-7 py-2.5 text-base'
};

type ButtonProps = {
  children?: string;
  leftArrow?: boolean;
  rightArrow?: boolean;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  breakpoint?: 'lg';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  leftArrow,
  rightArrow,
  size,
  variant = 'text',
  breakpoint,
  ...props
}: ButtonProps) => (
  <button
    className={twMerge(
      'flex items-center justify-center rounded-full font-raleway',
      variants[variant],
      !size &&
        breakpoint === 'lg' &&
        `${sizes.mobile} lg:gap-4 lg:px-8 lg:py-3 lg:text-xl`,
      size && sizes[size],
      className
    )}
    {...props}
  >
    {leftArrow && (
      <Image
        alt="strzałka w lewo"
        className="rotate-180"
        src={arrow as string}
      />
    )}
    {children}
    {rightArrow && <Image alt="strzałka w prawo" src={arrow as string} />}
  </button>
);

export default Button;
