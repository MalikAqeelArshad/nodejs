const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 8000;

const fs = require("fs");
const os = require("os");

// console.log(os.cpus().length);
// fs.writeFile('./log.txt', 'Hello world', () => {});

const server = createServer((req, res) => {
   if (req.url === "/favicon.ico") return;
   const log = `${new Date().toLocaleString()}: ${req.url}\n`;
   fs.appendFile("./log.txt", log, (err, result) => {
      res.end(result);
   });
});

// server.listen(port, () => console.log(`Server running at Port:${port}`));
server.listen(port, hostname, () =>
   console.log(`Server running at http://${hostname}:${port}`)
);
