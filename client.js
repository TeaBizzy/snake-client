const net = require("net");

// Establishes a connection with the game server
const connect = function(ipAddress = "localhost") {
  if (!ipAddress) {
    ipAddress = "localhost";
  }

  const conn = net.createConnection({
    host: ipAddress, // IP Address
    port: 50541        // PORT number here
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
    conn.write("Name: m8y");
  });
  

  return conn;
};


module.exports = { connect };