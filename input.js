let connection; // Stores our connection to the server so we can send it data from our inputs.

let currentDirection;
let currentInterval;

// Initializes capturing of user input
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume;

  // Setup the connection reference
  connection = conn

  // Register for the "data" event
  stdin.on("data", handleUserInput);


  return stdin;
};

// Moves the player in the given direction
const movePlayer = function(newDirection) {
  // If input given isn't valid just return!
  if (newDirection !== "w" && newDirection !== "a" && newDirection !== "s" && newDirection !== "d") {
    return;
  }
  currentDirection = newDirection;
  clearInterval(currentInterval);
  currentInterval = setInterval(() => connection.write(`Move: ${currentDirection}`), 75)
};

// Determines what to do with user input
const handleUserInput = function(key) {
  // If input is = "ctrl + c" kill the application.
  if (key === "\u0003") {
    process.exit();
  }

  movePlayer(key);
};

module.exports = { setupInput };