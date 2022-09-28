const net = require("net");
const {IP,PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('connection completed');
    conn.write("Name: JAY");
  });

  conn.on('data', (data) => {
    console.log('Sever says: ',data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };