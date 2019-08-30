var express = require('express')
var app = express()
const port = process.env.PORT || 5000;
//var EnvName = process.env.EnvName;

app.get('/', (req, res) =>{
  var htmlString ='<html><title>Heroku Demo</title><body><h1>Hello World </h1></body></html>';
  
  
  
  res.send(htmlString);
  
  
})

app.set('port', port);
app.listen(port, function () {
  console.log('App listening on port '+port+'!')
})
