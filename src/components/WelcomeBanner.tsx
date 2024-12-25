import { Stack, Title, Text, Image } from "@mantine/core";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import Platforms from "./Platforms";
import icon from "../assets/icon.webp";
import classes from "../styles/WelcomeBanner.module.css";

const WelcomeBanner = () => {
  return (
    <Stack align="center" justify="center" maw="90svw">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
        <Image
          src={icon}
          radius="15svw"
          h="30svw"
          w="30svw"
          maw={240}
          mah={240}
        />
      </motion.div>

      <Title order={4}>My Portfolio Is on Its Way 🔧</Title>
      <Text>Hey there! I'm Netanel.</Text>
      <Text className={classes.typewriter}>
        <Typewriter
          options={{
            strings: [
              "Software and Information Systems Engineering Student",
              "Passionate FullStack Developer in the Making",
              "Python Instructor",
              "Always Learning, Always Coding",
              "Dedicated to Writing Clean, Efficient, and Scalable Code",
              "Problem-Solver with a Passion for Technology and Innovation",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
            delay: 60,
          }}
        />
      </Text>
      <Platforms />
    </Stack>
  );
};

export default WelcomeBanner;
