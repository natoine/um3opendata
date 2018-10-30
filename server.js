var express = require('express')
var app = express()

app.get('/scrape', function(req, res){

  //All the web scraping magic will happen here

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})