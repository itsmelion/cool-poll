import { Flex } from '@habtic/layout';
import { AnimatePresence, motion } from 'framer-motion';

import type { HabticProps } from '@habtic/styled';

import { Card } from './Card';

interface PollViewProps {
  active: boolean;
  onSubmit: () => void;
}

type HabticComp = Omit<HabticProps, 'transition'>;
const MotionCard = motion<HabticComp>(Card);
const MotionBox = motion<HabticComp>(Flex);

const cardContainer = {
  initial: { position: 'relative', opacity: 0 },
  animate: { opacity: 1 },
  exit: { position: 'absolute', opacity: 0 },
  transition: { duration: 0.3 },
} as const;

const optionsContainer = {
  initial: 'hidden',
  animate: 'show',
  transition: { duration: 0.25, staggerChildren: 0.2 },
  variants: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
} as const;

const itemAnimation = {
  variants: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
} as const;

export const AnimatedCard: React.FC<PollViewProps> = ({ active, ...props }) => (
  <AnimatePresence>
    {active && <MotionCard {...props} {...cardContainer} as="form" />}
  </AnimatePresence>
);

export const StaggerContainer: React.FC = (props) => (
  <MotionBox
    flex={1}
    w="100%"
    {...props}
    {...optionsContainer}
  />
);

export const StaggerItem: React.FC = (props) => (
  <MotionBox flex={1} w="100%" {...itemAnimation} {...props} />
);
