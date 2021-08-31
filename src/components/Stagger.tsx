import {
  useColorModeValue,
  ChakraComponent,
  Radio,
  RadioProps,
  Flex,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "./Card";

interface PollViewProps {
  active: boolean;
  onSubmit: () => void;
}

const MotionCard = motion(Card);
const MotionBox = motion(Flex);

const cardContainer = {
  initial: { position: "relative", opacity: 0 },
  animate: { opacity: 1 },
  exit: { position: "absolute", opacity: 0 },
  transition: { duration: 0.3 },
};

const optionsContainer = {
  initial: "hidden",
  animate: "show",
  transition: { duration: 0.25, staggerChildren: 0.2 },
  variants: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

const itemAnimation = {
  variants: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
};

export const AnimatedCard: React.FC<PollViewProps> = ({ active, ...props }) => {
  const cardBg = useColorModeValue("gray.100", "gray.800");

  return (
    <AnimatePresence>
      {active && (
        <MotionCard {...props} {...cardContainer} as="form" bgColor={cardBg} />
      )}
    </AnimatePresence>
  );
};

export const StaggerContainer: React.FC = (props) => {
  return <MotionBox flex={1} w="100%" {...props} {...optionsContainer} />;
};

export const StaggerItem: ChakraComponent<typeof Radio, RadioProps> = (props) => (
  <MotionBox flex={1} w="100%" {...itemAnimation} {...props} />
);
