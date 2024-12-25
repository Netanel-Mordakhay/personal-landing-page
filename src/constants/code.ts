export const codeText = `// Define variables
const underConstruction = true;
const workingOnIt = true;

// Check current status
if (underConstruction && workingOnIt) {
  console.log("Looks like it's not up yet 😔");
  keepWorkingNoSleep();
}

function keepWorkingNoSleep() {
  setSleep(false);
  setCoding(true);
}`;
