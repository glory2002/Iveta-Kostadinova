import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from './ui/utils';

/** Framer-style: плавно ease-out, без „snappy“ край */
export const easeLux: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const easeOutSoft: [number, number, number, number] = [0.16, 1, 0.3, 1];

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/**
 * Скрол reveal — леко изкачване + opacity, веднъж на viewport.
 * Подходящо за обвиване на цели секции или блокове.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Забавяне в секунди (stagger между секции). */
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn('w-full min-w-0', className)}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -8% 0px' }}
      variants={{
        hidden: revealVariants.hidden,
        visible: {
          ...revealVariants.visible,
          transition: {
            duration: reduced ? 0 : 0.58,
            delay: reduced ? 0 : delay,
            ease: easeLux,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Hero: контейнер със stagger на директните деца */
export const heroStaggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

/** Hero: заглавие с вътрешен stagger на редовете */
export const heroTitleStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.02,
    },
  },
};

export const heroLine = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: easeLux },
  },
};

/** Карти / банери: лек „lift“ при hover (spring) */
export const liftSpring = { type: 'spring' as const, stiffness: 420, damping: 34, mass: 0.85 };
export const liftHoverY = -5;
