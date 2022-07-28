const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

const messages = [{id:0, text: 'Enter the Chat', username: 'Enter the room'}];
const sockets = [];

app.use(express.json());

app.listen(3001, () => {

    console.log('Running on port 3001');

});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const message = req.body;
    messages.push(message);

    for (const socket of sockets) {
        socket.send(json.stringify(message));

    }
});

app.ws('/messages', socket => {
    sockets.push(socket);

    socket.on('close', () => {
        sockets.splice(sockets.indexOf(socket), 1);
    });
});

