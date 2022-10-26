const { connect } = require("./client");

const args = process.argv.slice(2);

connect(args[0]);
