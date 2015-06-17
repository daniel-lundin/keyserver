var robot = require("robotjs");
var socketClient = require('socket.io-client')

var socket = socketClient('http://d-dog.se:8080');

socket.on('connect', function(){
  console.log('connected');
});

var events = ['left', 'right', 'enter'];

events.forEach(function(event) {
  socket.on(event, function() {
    console.log(event);
    robot.keyTap(event);
  });
});
