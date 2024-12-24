import { Group } from "@mantine/core";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Platforms = () => {
  return (
    <Group>
      <FaGithub size={35} />
      <FaLinkedin size={35} />
    </Group>
  );
};

export default Platforms;
