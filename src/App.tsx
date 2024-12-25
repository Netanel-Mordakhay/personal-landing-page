import { Box, SimpleGrid } from "@mantine/core";
import CodeWindows from "./components/CodeWindows";
import WelcomeBanner from "./components/WelcomeBanner";
import { motion } from "motion/react";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.2 },
      }}
    >
      <SimpleGrid cols={{ sm: 1, md: 2 }}>
        <WelcomeBanner />
        <CodeWindows />
      </SimpleGrid>
    </motion.div>
  );
}

export default App;
