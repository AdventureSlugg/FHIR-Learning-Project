// Imports
const express = require('express');

// Server setup
const serverConfiguration = {
	hostname: '127.0.0.1',
	port: 3000
};

const app = express();

// Endpoint setup
app.get('/patient', (req, res) => {
	res.send('This is the patient data...')
})

app.listen(serverConfiguration.port, () => {
	console.log(`Server running at ${serverConfiguration.hostname}:${serverConfiguration.port}/`)
}) 


// Fire.ly data retrieval