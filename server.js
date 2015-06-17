var restify = require('restify');
var socketio = require('socket.io');

var server = restify.createServer();
var io = socketio.listen(server.server);


io.sockets.on('connection', function (socket) {
});

var events = ['left', 'right', 'enter'];

events.forEach(function(event) {
  server.get('/' + event, function(req, res, next) {
    io.sockets.emit(event);
    res.send('ok');
    next();
  });
});

server.listen(8080, function () {
    console.log('socket.io server listening at %s', server.url);
});
