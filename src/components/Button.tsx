import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import arrow from '@/public/assets/icons/arrow.svg';

const variants = {
  contained: 'bg-primary font-medium text-white',
  outlined: 'border border-border bg-transparent font-medium',
  text: 'gap-1 px-0 font-semibold decoration-primary underline-offset-4 hover:underline'
};

const breakpoints = {
  lg: 'lg:gap-4 lg:px-8 lg:py-3 lg:text-xl',
  md: 'md:gap-4 md:px-8 md:py-3 md:text-xl'
};

type ButtonProps = {
  children?: string;
  leftArrow?: boolean;
  rightArrow?: boolean;
  breakpoint?: keyof typeof breakpoints;
  variant?: keyof typeof variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  leftArrow,
  rightArrow,
  variant = 'text',
  breakpoint = 'lg',
  ...props
}: ButtonProps) => (
  <button
    className={twMerge(
      'flex items-center justify-center gap-3 rounded-full px-7 py-2.5',
      variants[variant],
      breakpoints[breakpoint],
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
