var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
var data = fs.readFileSync('./public/buildingData.json', 'utf8');
var words = JSON.parse(data);

var port = 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port);

app.get("/data",(req,res)=>{
    res.send(words);
});

console.log( typeof words);
process.stdout.write(JSON.stringify(data));