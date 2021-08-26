import { useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "./Card";

interface PollViewProps {
  active: boolean;
  onSubmit: () => void;
}

const MotionContainer = motion(Card);

export const CardStackAnimation: React.FC<PollViewProps> = ({
  active,
  ...props
}) => {
  const cardBg = useColorModeValue("gray.50", "gray.800");

  return (
    <AnimatePresence>
      {active && (
        <MotionContainer {...props} {...animations} as="form" bgColor={cardBg} />
      )}
    </AnimatePresence>
  );
};

const animations = {
  initial: { y: "110vh", rotate: "35deg" },
  animate: { y: "0", rotate: "0deg" },
  exit: { y: "-110vh", rotate: "-35deg" },
  transition: { type: "spring", stiffness: 300, damping: 20, duration: 1 },
};
