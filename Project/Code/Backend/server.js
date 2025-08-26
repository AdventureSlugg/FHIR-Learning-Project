// Imports
const express = require('express');
const http = require('http');

// Server setup
const serverCongifuration = {
	hostname: '127.0.0.1',
	port: 3000
};

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Server created...');
})

server.listen(serverCongifuration.port, serverCongifuration.hostname, () => {
	console.log(`Server running at http://${serverCongifuration.hostname}:${serverCongifuration.port}/`)
})

// Endpoint setup