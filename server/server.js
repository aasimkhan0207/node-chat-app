const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io')

var app = express();
var publicPath = path.join(__dirname,'../public');
var port = process.env.PORT || 3000 ;
app.use(express.static(publicPath));

var server = http.createServer(app); // server similar to as app(express)
var io = socketIO(server); // web socket server

// register event listener . whene this event happens do smth.
io.on('connection', (socket)=>{
    console.log('New user connected');

    socket.on('disconnect',(socket) =>{
        console.log('client Disconnected');
    });
});

server.listen(port, ()=>{
    console.log(`Server is up at ${port}`);
});
