const wisp = require('wisp-server-node');
const http = require('http');

const server = http.createServer();

server.on('upgrade', (req, socket, head) => {
    wisp.routeRequest(req, socket, head);
});

server.listen(process.env.PORT || 8080, () => {
    console.log(`WISP server running on port ${server.address().port}`);
});
