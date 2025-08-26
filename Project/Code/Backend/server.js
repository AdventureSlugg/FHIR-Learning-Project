// Imports
const express = require('express');
const axios = require('axios');

// Server setup
const serverConfiguration = {
	hostname: '127.0.0.1',
	port: 3000
};

const app = express();

// Endpoint setup
app.get('/patient', async (req, res) => {
	const patient = await getPatients();
	res.json(patient)
})

app.listen(serverConfiguration.port, () => {
	console.log(`Server running at ${serverConfiguration.hostname}:${serverConfiguration.port}/`)
}) 


// Fire.ly data retrieval
const getPatients = async () => {
	const response = await firelyJSONRequest('Patient');
	return response;
}

const firelyJSONRequest = async (resource) => {
	try {
		const firelyServer = "https://server.fire.ly"
		const response = await axios.get(`${firelyServer}/${resource}?_format=json`, {
			headers: {
				'Accept': 'application/fhir+json'
			}
		})
		return response.data
	} catch (e) {
		console.error(e);
	}
}