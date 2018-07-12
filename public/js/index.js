var socket = io();

socket.on('connect',function() {
    console.log('client connected server');

    socket.emit('createMessage',{
        to:'aasim@gmail.com',
        message:'i have completed ur task'
    });

});

// custom event newEmail
socket.on('newMessage', function(message) {
    console.log('new message ',message);
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});
