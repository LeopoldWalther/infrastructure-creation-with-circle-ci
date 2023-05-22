var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world from Leo!");
});
server.listen(3000);