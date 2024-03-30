const {app} = require('./app.js')
// create server
const http = require("http");
const server = http.createServer(app);
//
const {setIO}= require('./socket-setup.js')
const io = setIO(server)

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server listening on port : ${PORT}`);
});

io.on("connection", onConnection);

const { Player, allPlayers } = require("./db/player.js");

// register
const registerDisconnectHandler = require("./Listeners/disconnect");
const registerSearchMatchHandler = require("./Listeners/searchMatch");
const registerChatHandler = require("./Listeners/chatListener.js")
const registerDropPieceHandler = require("./Listeners/dropPieceListener.js")
const registertakeTileHandler = require('./Listeners/takeTileListener.js')
const registerFinishGameHandler = require('./Listeners/finishGameListener.js')

function onConnection(socket) {
  newPlayer(socket.id);
  console.log(socket.id)
  // listeners
  registerDisconnectHandler(io, socket);
  registerSearchMatchHandler(io, socket);
  registerChatHandler(io,socket);
  registerDropPieceHandler(io,socket)
  registertakeTileHandler(io,socket)
  registerFinishGameHandler(io,socket)
}

function newPlayer(socketid) {
  const newPlayer = new Player({ socketid });
  allPlayers[socketid] = newPlayer;
}
