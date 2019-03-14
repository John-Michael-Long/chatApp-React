const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const io = require('socket.io').listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });


io.on('connection', function(socket){
  console.log('a user connected!')

  socket.on('new-client-msg', function(msg){

    msg.timeReceived = Date.now();
    console.log('message: ', msg)

    io.emit('new-server-msg', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});