var express = require('express')
var app = express()
const port = process.env.PORT || 5000;

app.get('/', async (req, res) =>{
  var htmlString ='<html><title>Heroku Demo</title><body><h1>Hello World'+process.env.EnvName+'</h1></body></html>';
  
  
  
  res.send(htmlString);
  
  
})

app.set('port', port);
app.listen(port, function () {
  console.log('App listening on port '+port+'!')
})