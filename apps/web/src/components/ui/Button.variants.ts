export const buttonVariants = ['primary', 'secondary', 'ghost', 'brand'] as const;

export type ButtonVariant = (typeof buttonVariants)[number];
