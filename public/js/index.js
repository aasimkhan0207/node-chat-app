var socket = io();
// built-in event connect
socket.on('connect',function() {
    console.log('client connected server');
});
// built-in event disconnect
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

// event listener newMessage (server to client)
socket.on('newMessage', function(message) {
    console.log('new message : ',message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

// // event emitter createMessage with ack.
// // callback function will only be execute when emmit is successfull
// socket.emit('createMessage', {
//     from: 'Frank',
//     text:'Hi'
// }, function(data) {
//     console.log('Got it! ',data);
// });

jQuery('#message-form').on('submit', function (e){
    //by default submit results in page refresh, not required
    e.preventDefault();
    socket.emit('createMessage',{
        from : 'User',
        text : jQuery('[name = message]').val()
    }, function() {

    });

});
