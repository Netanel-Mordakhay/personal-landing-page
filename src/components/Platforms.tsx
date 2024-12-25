import { PlatformIcon } from "./PlatformIcon";
import { Group } from "@mantine/core";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const Platforms = () => {
  return (
    <Group>
      <PlatformIcon link="https://github.com/Netanel-Mordakhay">
        <FaGithub size={30} title="GitHub profile" />
      </PlatformIcon>
      <PlatformIcon link="https://www.linkedin.com/in/netanel-mordakhay">
        <FaLinkedin size={30} title="Linkedin profile" />
      </PlatformIcon>
      <PlatformIcon link="../assets/Netanel Mordakhay CV.pdf">
        <TbFileCv size={30} title="Download CV" />
      </PlatformIcon>
    </Group>
  );
};

export default Platforms;
