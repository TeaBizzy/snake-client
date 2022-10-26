const net = require("net");
const {IP, PORT} = require("./constants");

// Establishes a connection with the game server
const connect = function(name, ipAddress) {
  const conn = net.createConnection({
    host: IP, // IP Address
    port: PORT      // PORT number here
  });

  // Give connection status to user
  console.log(`Connecting to IP: ${ipAddress}, on PORT: 50541`);

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Displays messages from the server
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log(`Connection successfuly established with IP: ${ipAddress} on PORT: 50541`);
    conn.write(`Name: ${name}`);
  });

  conn.on("end", () => {
    console.log("The server has terminated your connection...");
    process.exit();
  });
  

  return conn;
};


module.exports = { connect };