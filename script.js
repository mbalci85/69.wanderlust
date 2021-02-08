// Page Elements
const $input = $('#city');
const inputField = document.getElementById('city');
const $submit = $('#button');
const submitBtn = document.getElementById('button');
const $destination = $('#destination');
const destinationDiv = document.getElementById('destination');
const $container = $('.container');
const $venueDivs = $('#venues');
const venueDiv = document.getElementById('venues');
const $weatherDiv = $('#weather1');
const weatherD = document.getElementById('weather1');

const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

// Foursquare API Info
// const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
// const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';
const clientId = 'LPEV44SM52N2GZOSAQBRYCSA1QO30NDX1AKGYAAI3XKWBLYS';
const clientSecret = 'MHFFSDYVV4N2CRDJSY3OZHTS3BQVRZQHMPSIO3M03H5FVDJP';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// // WEATHER API Info
const apiKey = '2082573baa2c88e4ee84edd0044c8192';
const forecastUrl = 'http://api.weatherstack.com/current?access_key=';

// Add AJAX functions here:

const getVenues = async () => {
	const city = inputField.value;
	const urlToFetch =
		url +
		city +
		'&limit=3' +
		'&client_id=' +
		clientId +
		'&client_secret=' +
		clientSecret +
		'&v=' +
		'20210101';
	console.log(urlToFetch);

	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			console.log(jsonResponse.response.groups[0].items);
			createVenuesHTML(jsonResponse.response.groups[0].items);
		} else {
			throw new Error('Something went wrong');
		}
	} catch (err) {
		console.log(err);
	}
};

const getForecast = async () => {
	try {
		const urlToFetch = forecastUrl + apiKey + '&query=' + inputField.value;
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			createWeatherHTML(jsonResponse);
		} else {
			throw new Error('Oopppsss!!!');
		}
	} catch (err) {
		console.log(err);
	}
};

// Execute function
//$submit.click(() => {
submitBtn.addEventListener('click', () => {
	// $venueDivs.empty();
	// $weatherDiv.empty();
	// $destination.empty();
	getForecast();
	getVenues();
	return false;
});
