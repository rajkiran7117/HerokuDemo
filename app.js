var express = require('express')
var app = express()
const port = process.env.PORT || 5000;
var EnvName = process.env.EnvName;

app.get('/', (req, res) =>{
  var htmlString ='Hello World';
  if(EnvName){
   htmlString += ' '+EnvName; 
  }
  
  
  res.send(htmlString);
  
  
})

app.set('port', port);
app.listen(port, function () {
  console.log('App listening on port '+port+'!')
})
