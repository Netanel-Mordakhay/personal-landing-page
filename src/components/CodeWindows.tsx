import classes from "../styles/CodeWindows.module.css";
import { Box } from "@mantine/core";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import {
  VscChromeClose,
  VscChromeRestore,
  VscChromeMinimize,
} from "react-icons/vsc";

import { codeText } from "../constants/code";
const CodeWindows = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Box className={classes.codeWindow}>
      <Box className={classes.header}>
        <span className={classes.title}>naticodes-personal-portfolio</span>
        <VscChromeMinimize className={classes.icon} />
        <VscChromeRestore className={classes.icon} />
        <VscChromeClose className={classes.icon} />
      </Box>
      <Box className={classes.content}>
        <pre>
          <code className="language-javascript">{codeText}</code>
          <span className={classes.keyboard}>|</span>
        </pre>
      </Box>
    </Box>
  );
};

export default CodeWindows;
