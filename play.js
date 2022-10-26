const { connect } = require("./client");
const { setupInput } = require("./input");
const args = process.argv.slice(2);

const conn = connect(args[0]); // Stores the conn
const stdin = setupInput(conn); // Stores the stdin, input needs access to the connection to handle inputs properly
