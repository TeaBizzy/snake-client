const net = require("net");

const args = process.argv.slice(2);

let ipAddress = args.length > 0 ? args[0] : "localhost"


// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: ipAddress, // IP Address
    port: 50541        // PORT number here
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Displays messages from the server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log(`Connecting to IP: ${ipAddress}, on PORT: 50541`);
connect();