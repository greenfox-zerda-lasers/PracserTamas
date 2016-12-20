"use strict";

var express = require("express");
var exampleApp = express();

exampleApp.get("/", function(request, response){
    response.send("hellobelosz");
});

exampleApp.post("/", function(request, response){
    response.send("posztoltal");
});

app.listen(3000);
