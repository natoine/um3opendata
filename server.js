var express = require('express')
var app = express()
var request = require('request')

app.get('/scrape', function(req, res){

	console.log("gonna scrape")

	url = 'http://www.google.fr'

	request(url, function(error, response, html){

  		console.log('body:', html);
  		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

		if(!error)
		{

		}
	})


})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})