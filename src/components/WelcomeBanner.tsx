import { Stack, Title, Text } from "@mantine/core";
import Typewriter from "typewriter-effect";
import { PiCodeFill } from "react-icons/pi";
import Platforms from "./Platforms";

const WelcomeBanner = () => {
  return (
    <Stack align="center" justify="center" maw="90svw">
      <PiCodeFill size={100} />
      <Title order={4}>My Portfolio Is on Its Way 🔧</Title>
      <Text>Hey there! I'm Netanel.</Text>
      <Typewriter
        options={{
          strings: [
            "Software and Information Systems Engineering Student",
            "Aspiring FullStack Developer",
            "Python Instructor",
            "Always Learning, Always Coding",
            "Committed to Crafting Efficient Code",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          delay: 60,
        }}
      />
      <Platforms />
    </Stack>
  );
};

export default WelcomeBanner;
