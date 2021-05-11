const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your order? ", answer => {
  console.log(`Order: ${answer}`);
});
