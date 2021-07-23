import { AnimatePresence, motion } from "framer-motion";

import { Container } from "./View.styles.web";

interface PollViewProps {
  active: boolean;
}

const MotionContainer = motion(Container);

export const View: React.FC<PollViewProps> = ({ active, ...props }) => {
  return (
    <AnimatePresence>
      {active && <MotionContainer {...props} {...animations} />}
    </AnimatePresence>
  );
};

const animations = {
  initial: { y: "110vh", rotate: "35deg" },
  animate: { y: "0", rotate: "0deg" },
  exit: { y: "-110vh", rotate: "-35deg" },
  transition: { type: "spring", stiffness: 300, damping: 20, duration: 1 },
};
