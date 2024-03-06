const http = require('http');
const express = require('express');
const path = require('path');
const {Server} = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve('../public')));

const clients = []

//Socket.io
io.on('connection',(client)=>{
    clients.push(client.id);
    console.log(clients);
    client.on('send',(message)=>{
        console.log('user message from client ',client.id, ' : ',message);
        io.emit('user message from client', [client.id,message]);
    })
})

app.get('/webSocket',(req,res)=>{
    const staticPath = path.join(__dirname, "public");

    return res.sendFile(path.join(staticPath,'/index.html'));
})

server.listen(5050,()=>{
    console.log('listening on port 5050');
});