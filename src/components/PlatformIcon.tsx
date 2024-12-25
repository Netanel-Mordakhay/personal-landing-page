import { motion } from "motion/react";

interface Props {
  link: string;
  children: React.ReactNode;
}

export const PlatformIcon = ({ link, children }: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </motion.div>
  );
};
