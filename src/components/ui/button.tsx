/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line import/no-extraneous-dependencies
import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import arrow from '@/public/assets/icons/arrow.svg';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[2.5rem] font-raleway leading-[145%]',
  {
    variants: {
      variant: {
        outlined: 'bg-white border border-border uppercase font-medium ',
        contained:
          'bg-primary text-white uppercase border border-primary font-medium',
        text: 'px-0 py-[.75rem] text-primary text-[1.25rem] font-semibold tracking-[.0125] hover:underline underline-offset-4 decoration-primary gap-1'
      },
      size: {
        desktop:
          'py-[.75rem] px-[2rem] gap-[1rem] text-[1.25rem] tracking-[.0125rem]',
        mobile:
          'py-[.625rem] px-[1.75rem] gap-[.75rem] text-[1rem] tracking-[.01rem]'
      }
    }
  }
);

export type ButtonProps = {
  children?: string;
  leftArrow?: boolean;
  rightArrow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = ({
  className,
  variant,
  size,
  children,
  leftArrow,
  rightArrow,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {leftArrow && (
        <Image alt="strzałka w lewo" className="rotate-180" src={arrow} />
      )}
      {children}
      {rightArrow && <Image alt="strzałka w prawo" src={arrow} />}
    </button>
  );
};
