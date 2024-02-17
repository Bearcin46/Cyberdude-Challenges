const httpServer = require("http");
const internData = require("./data/interns.json");
const SERVER_PORT = 3333;
httpServer
  .createServer((req, res) => {
    res.write(JSON.stringify(internData));
    res.end();
  })
  .listen(SERVER_PORT);
