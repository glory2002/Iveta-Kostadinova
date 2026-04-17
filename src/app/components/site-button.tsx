import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './ui/utils';

/**
 * Бутони по дизайн системата (Figma — стиловете в `styles/buttons.css` като `sb-*`).
 * Използвай `asChild` за `<a href="...">` вместо `<button>`.
 */
const siteButtonVariants = cva(
  'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        fillCream: 'sb-fill-cream',
        fillChocolate: 'sb-fill-chocolate',
        fillChocolateCompact: 'sb-fill-chocolate-compact',
        outlineChocolate: 'sb-outline-chocolate',
        iconOutline: 'sb-icon-outline',
        /** Стрелки върху бежов фон (секция курсове) */
        iconOutlineSand: 'sb-icon-outline border-primary text-primary',
        fillCreamSoft: 'sb-fill-cream-soft',
        outlinePrimary: 'sb-outline-primary',
        /** Тъмен hero: off-white stroke + текст, прозрачен фон */
        outlineOffWhite: 'sb-outline-off-white',
        floatingGold: 'sb-floating-gold group relative',
        floatingBrown: 'sb-floating-brown group relative',
      },
    },
    defaultVariants: {
      variant: 'fillCream',
    },
  },
);

export type SiteButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof siteButtonVariants> & {
    asChild?: boolean;
  };

function SiteButton({ className, variant, asChild = false, ...props }: SiteButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="site-button"
      className={cn(siteButtonVariants({ variant }), className)}
      {...props}
    />
  );
}

export { SiteButton, siteButtonVariants };
