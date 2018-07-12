var socket = io();

socket.on('connect',function() {
    console.log('client connected server');
    // socket.emit('createMessage',{
    //     from:'aasim@gmail.com',
    //     text:'i have completed ur task'
    // });
    // // u can also emit from dev console eg. socket.emit('createMessage',{from:'robot',text:'hello'});
});

// custom event newEmail
socket.on('newMessage', function(message) {
    console.log('new message : ',message);
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});
