var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// Broadcast all draw clicks.
io.on('connection', function(socket){ 
     
    socket.on('message',function(msg){
        socket.broadcast.emit('message', msg);
     });

    socket.on('disconnect',function(){
        console.log('Server has disconnected');
    });
 
    socket.on('iran', function(data){
      console.log("**************" + data.todo + "******************");
    });
     
});

// Send client html.
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/client.html')
})

app.get('/client', function(req, res) {
    res.sendfile(__dirname + '/listent.html')
})



http.listen(3000, function() {
	console.log('listening on *: 3000');
})
