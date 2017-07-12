var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var user = {
	firstname:'wxy',
	lastname:'xyz'
};

app.use(express.static('public'));


app.get('/api/stuff.json', (req, res) => {
 console.log('Get request received ');
 /*res.send(user);
 res.json(user);*/
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(user));
 res.end();
});

app.post('/',(req, res) =>{
console.log('post request received');
});


var server = app.listen(3001,'192.168.43.239', function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});




