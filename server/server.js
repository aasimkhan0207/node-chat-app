const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io')

var app = express();
var publicPath = path.join(__dirname,'../public');
var port = process.env.PORT || 3000 ;
app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server); // web socket server


io.on('connection', (socket)=>{
    // log message when connected
    console.log('New user connected');

    //server to client
    socket.emit('newMessage',{
        from: 'John',
        message:'hey ! this is server',
        createdAt:123
    });// this data will be sent from server to client

    // client to server
    socket.on('createMessage',(message)=>{
        console.log('clients message ',message);
    })


    socket.on('disconnect',(socket) =>{
        console.log('client Disconnected');
    });

});

server.listen(port, ()=>{
    console.log(`Server is up at ${port}`);
});
