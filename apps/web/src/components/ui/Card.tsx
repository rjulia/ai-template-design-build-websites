import type { HTMLAttributes, PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export function Card({ children, className, ...props }: CardProps) {
  const classes = ['ui-card', className].filter(Boolean).join(' ');

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
}
