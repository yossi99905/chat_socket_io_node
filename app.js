const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors');
app.use(cors());

const { Server } = require('socket.io');


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.on("send_massge", (data) => {
        console.log(data);
        socket.broadcast.emit("recive_massge", data);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


