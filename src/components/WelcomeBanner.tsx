import { Stack, Title, Text } from "@mantine/core";
import Typewriter from "typewriter-effect";
import Platforms from "./Platforms";
import classes from "../styles/WelcomeBanner.module.css";
import TopAvatar from "./TopAvatar";
import { personalText } from "../constants/personal-text";

const WelcomeBanner = () => {
  return (
    <Stack align="center" justify="center" maw="90svw">
      <TopAvatar />

      <Title order={4}>My Portfolio Is on Its Way 🔧</Title>
      <Text lh={1}>Hey there! I'm Netanel.</Text>
      <Text className={classes.typewriter}>
        <Typewriter
          options={{
            strings: personalText,
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
