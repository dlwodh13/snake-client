const connect = require('./client');
console.log('connecting...');
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("key",  handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if(key === '\u0003') {
    process.exit();
  } else if(key === 'w') {
    con.write("Move: up");
  } else if(key === 'a') {
    con.write("Move: left");
  } else if(key === 's') {
    con.write("Move: down");
  } else if(key === 'd') {
    con.write("Move: right");
  }
}
