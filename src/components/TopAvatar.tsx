import { motion } from "motion/react";
import { Image } from "@mantine/core";
import classes from "../styles/TopAvatar.module.css";
import icon from "../assets/icon.webp";

const TopAvatar = () => {
  return (
    <motion.div
      className={classes.avatarContainer}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      animate={{
        y: [0, -5, 0],
        transition: {
          repeat: Infinity,
          duration: 3,
        },
      }}
    >
      <Image
        className={classes.avatar}
        src={icon}
        radius="15svw"
        h="30svw"
        w="30svw"
        maw={240}
        mah={240}
      />
      <div className={classes.avatarShadow} />
    </motion.div>
  );
};

export default TopAvatar;
