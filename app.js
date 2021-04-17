const http = require("http");
const express = require("express");
const path = require("path");
const app = express();

const server = http.createServer(app);
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});
app.get("/aboutus", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/aboutus.html"));
});
app.get("/wherearewe", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/wherearewe.html"));
});
app.get("/makeareservation", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/makeareservation.html"));
});

server.listen(8080);