import Image from 'next/image';
import Link from 'next/link';
import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import isURL from '@/utils/isURL';

const variants = {
  contained: 'border bg-primary font-medium text-white',
  containedWhite: 'border bg-white font-medium text-primary',
  outlined: 'border border-border bg-transparent font-medium',
  outlinedWhite: 'border border-white bg-transparent font-medium text-white',
  text: 'gap-1 font-semibold decoration-primary underline-offset-4 hover:underline',
  textWhite:
    'gap-1 font-semibold decoration-white underline-offset-4 hover:underline text-white'
};

const breakpoints = {
  lg: 'lg:gap-4 lg:px-8 lg:py-3 lg:text-xl',
  md: 'md:gap-4 md:px-8 md:py-3 md:text-xl'
};

const Button = ({
  breakpoint = 'lg',
  chevron,
  children,
  className,
  leftArrow,
  rightArrow,
  variant = 'text',
  href,
  ...props
}: {
  children?: string;
  chevron?: boolean;
  leftArrow?: boolean;
  rightArrow?: boolean;
  breakpoint?: keyof typeof breakpoints;
  variant?: keyof typeof variants;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const Content = (
    <>
      {leftArrow && (
        <Image
          alt="strzałka w lewo"
          className={
            chevron ? 'rotate-180 scale-50 md:scale-100' : 'rotate-180'
          }
          height={25}
          src={chevron ? '/icons/chevron.svg' : '/icons/arrow.svg'}
          width={25}
        />
      )}
      {children}
      {rightArrow && (
        <Image
          alt="strzałka w prawo"
          className={chevron ? 'scale-50 md:scale-100' : ''}
          height={25}
          src={chevron ? '/icons/chevron.svg' : '/icons/arrow.svg'}
          width={25}
        />
      )}
    </>
  );

  const classes = twMerge(
    'flex items-center justify-center gap-3 rounded-full px-7 py-2.5',
    variants[variant],
    breakpoints[breakpoint],
    chevron && 'p-3 md:px-8 md:py-3',
    props.disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return href ? (
    <Link
      className={classes}
      href={href}
      {...(isURL(href) ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
    >
      {Content}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {Content}
    </button>
  );
};

export default Button;
