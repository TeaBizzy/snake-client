const { connect } = require("./client");

const args = process.argv.slice(2);

// Initializes capturing of user input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume;
  return stdin;
};

const stdin = setupInput(); // Stores the stdin
const conn = connect(args[0]); // Stores the conn

// Testing refactored connect event
conn.on("connect", () => {
  conn.write("Move: up");
});

// handles user inputs
const handleUserInput = function(key) {
  // Kills the process when "ctrl + c" is input to the terminal
  if (key === "\u0003") {
    process.exit();
  }
};

// The function to call when the data event appears
stdin.on("data", handleUserInput);