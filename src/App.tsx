import { Box, SimpleGrid } from "@mantine/core";
import CodeWindows from "./components/CodeWindows";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <Box className="app">
      <SimpleGrid cols={{ sm: 1, md: 2 }}>
        <WelcomeBanner />
        <CodeWindows />
      </SimpleGrid>
    </Box>
  );
}

export default App;
