const { connect } = require("./client");
const { setupInput } = require("./input");
const args = process.argv.slice(2);

const stdin = setupInput(); // Stores the stdin
const conn = connect(args[0]); // Stores the conn
