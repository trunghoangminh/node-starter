var express = require('express');
var http = require('http');
var path = require('path');

// Get cookie from client request
var cookie = require('cookie-parser');

// To parse json, text, raw data is sent from client
var parser = require('body-parser');

var app = express();
// Application listen port
var port = process.env.PORT | 3000;

// Define router
var appConstant = require('./utils/app.server.constant');
var indexRouter = require('./controllers/index/index.server.route');
var adminRouter = require('./controllers/admin/admin.server.route');

app.use(cookie());
app.use(parser());
app.use(appConstant.URL_API, indexRouter);
app.use(appConstant.URL_API, adminRouter);
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html')
})
// Define resource directory
app.use(express.static(path.join(__dirname, 'public')));

// Init HTTP server
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// Starting the server
server.listen(port, () => {
  console.log('<-- Server listen on port ' + port + ' -->');
});
var currentUser = [];
io.sockets.on('connection', (socket) => {
  console.log('Client connect: ' + socket.client.id);
  currentUser.push(socket.client.id);
  console.log(currentUser);

  socket.on('disconnect', () => {
    console.log('Client disconnect: ' + socket.client.id);
    var index = currentUser.indexOf(socket.client.id);
    if (index !== -1) currentUser.splice(socket.client.id, 1);
    console.log(currentUser);
  });

  socket.on('hello', (data) => {
    console.log(data);
    socket.emit('hello', 'OK Trung')
  });
});

module.exports.app = app;
