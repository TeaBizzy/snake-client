let connection; // Stores our connection to the server so we can send it data from our inputs.

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
const movePlayer = function(direction) {
  // If input given isn't valid just return!
  if (direction !== "w" && direction !== "a" && direction !== "s" && direction !== "d") {
    return;
  }

  connection.write(`Move: ${direction}`); // Tell the server to move our snake!
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