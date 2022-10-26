// Initializes capturing of user input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume;

  // Register for the "data" event
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};


module.exports = { setupInput };