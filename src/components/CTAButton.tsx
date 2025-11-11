'use client';

import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

interface CTAButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  textClassName?: string;
  textStyle?: CSSProperties;
}

const baseButtonClasses =
  'inline-flex items-center justify-center px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90 cursor-pointer';

const baseTextClasses =
  'text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal';

export default function CTAButton({
  href = '/contact',
  children,
  className,
  style,
  textClassName,
  textStyle
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseButtonClasses} ${className ?? ''}`.trim()}
      style={{
        boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset',
        ...style
      }}
    >
      <span
        className={`${baseTextClasses} ${textClassName ?? ''}`.trim()}
        style={{ color: '#0C2756', ...textStyle }}
      >
        {children}
      </span>
    </Link>
  );
}



