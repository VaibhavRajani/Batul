var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/index", function(req, res){
	res.render("index");
});

app.get("/secret", function(req,res){
	res.render("secret");
});

app.get("/timeline", function(req,res){
	res.render("timeline");
});

app.get("/video", function(req,res){
	res.render("video");
});

app.get("/trivia", function(req,res){
	res.render("trivia");
});

app.get("/otwya", function(req,res){
	res.render("otwya");
});

app.get("/happy", function(req,res){
	res.render("happy");
});

app.get("/sad", function(req,res){
	res.render("sad");
});

app.get("/angry", function(req,res){
	res.render("angry");
});

app.get("/dts", function(req,res){
	res.render("dts");
});

app.get("/missing", function(req,res){
	res.render("missing");
});

app.get("/mam", function(req,res){
	res.render("mam");
});

app.get("/future", function(req,res){
	res.render("future");
});

app.get("/real", function(req,res){
	res.render("real");
});

app.get("/dguom", function(req,res){
	res.render("dguom");
});

app.get("/rap", function(req,res){
	res.render("rap");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("SERVER CONNECTED!");
});
