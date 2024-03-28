const cors = require('cors')
const express = require('express');
const app = express();
app.use(cors()) // allow all cros origins
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 3000
server.listen(PORT,()=>{
    console.log(`server listening on port : ${PORT}`)
})

io.on("connection", onConnection);
function onConnection(socket){
    console.log(socket.id)
}   