var express = require('express');
var app = express();

// allows us to serve static files (images / css)
app.use(express.static(__dirname + '/public'));

// routes 

app.get("/", function(req, res){
    res.render("index");
});


// set port
var port = process.env.PORT || 5000

app.listen(port,  function(){
    console.log("App is running on port " + port);
});