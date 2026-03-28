import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import type { ButtonVariant } from './Button.variants';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  const classes = ['ui-button', `ui-button--${variant}`, className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
