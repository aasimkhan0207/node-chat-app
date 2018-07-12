var socket = io();

socket.on('connect',function() {
    console.log('client connected server');

    // socket.emit('createMessage',{
    //     from:'aasim@gmail.com',
    //     text:'i have completed ur task'
    // });

});

// custom event newEmail
socket.on('newMessage', function(message) {
    console.log('new message ',message);
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});
