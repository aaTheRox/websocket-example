const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 5000});

wss.on('connection', function connection(ws) {
    console.log('Connected')
  ws.on('message', function incoming(message) {
    console.log(message);
  });

  ws.on('send-message', (message)=> {
    console.log(message);
  });
  

});
