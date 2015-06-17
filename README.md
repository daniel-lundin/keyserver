# Key server

Toy project to control key presses from http requests.
E.g. control a presentation from a Pebble watch.

## Server
Listens to http requests and emit socket.io events that clients can listen to

```
node server.js
```

### API

 - /left
 - /right
 - /enter

## Client
Connects to a server instance and listens for socket.io events and triggers the key presses

```
node client.js [server url]
```


