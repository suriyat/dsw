var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(3000,(req) => {
    console.log("server running in 3000");
});