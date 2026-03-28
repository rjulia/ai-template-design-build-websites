export const buttonVariants = ['primary', 'secondary', 'ghost'] as const;

export type ButtonVariant = (typeof buttonVariants)[number];
